# BagBuddy v1 spec

Vocabulary follows `GLOSSARY.md`. Decisions with lasting consequences are in `docs/adr/`.

## Goal

A packing-list web app. A user creates Trips, reusable Lists and Templates; items are grouped into Categories; per item the user sees how many they **want**, still need to **buy**, have **prepared** and have **packed**. Web first (online-only), then Capacitor mobile builds with offline support. Everything is hand-built: no component libraries.

## Out of scope for v1

Live collaboration (future, Trips only), data export, offline sync, theming (tokens only), PWA, Nuxt landing page, travelers / weather / reminders. Share links are designed for but ship in phase 6.

## Domain rules

- **Trip**: name, optional destination, optional start/end dates, optional notes, archived flag. One packer. Each person creates their own Trip.
- **List**: account-owned, reusable. **List items** have a Catalog item or Custom item, one Category, and `wanted`. Assigned to Trips through **Trip lists**.
- **Progress** (`owned`, `prepared`, `packed`) lives on the Trip list per List item. Same List on two Trips = independent progress (ADR-0003).
- `to buy = max(0, wanted − owned)` (derived). Invariant `packed ≤ prepared ≤ owned`. Lowering `wanted` never blocks or clamps; the item shows a **surplus** indicator when `prepared > wanted`.
- **Template**: items and Categories, no quantities. Template → List copies items (user then fills quantities) and records `source_template_id` on the List. List → Template copies items and drops quantities. No live link (ADR-0004).
- A Catalog item appears at most once per List. Adding it again shows a warning and scrolls to the existing row. Custom items may repeat.
- Renaming a Catalog-backed item turns it into a Custom item that keeps its Category. Fixing wrong names is the user's responsibility.
- Deleting a List used by Trips asks for confirmation and removes its progress. Un-assigning a List removes that Trip list's progress. Deleting a List item deletes its progress. A new List item starts at 0 for every Trip list of that List.
- **Share links** (phase 6): immutable server snapshot of a List or Template, unguessable token, public preview, "add a copy" for any Guest or Account, revocable. Shared Lists carry items and `wanted`, never progress. Trips are not shareable.
- **Guests**: anonymous Supabase users created on first launch, upgraded in place to an Account (same id). Signing in to an existing Account from a Guest session offers to copy the Guest's data into it. Guests inactive 90 days are deleted with their data.
- **Account deletion** in v1: cascades through everything the user owns, removes their share links, leaves copies others made. It also deletes the Supabase user (admin API from Nest).

## Architecture

- pnpm monorepo: `apps/web`, `apps/api`, `packages/shared` (types, validation, pure quantity logic).
- **Web**: Vue 3, TypeScript strict, Vite, vue-router, Pinia, hand-written CSS with custom-property tokens, mobile-first, i18n layer with locale files (`en-US` only for now, fallback `fr-BE → fr → en-US`). Designs supplied by the owner; screens/navigation (bottom tabs: Trips, Lists, Templates, Settings) may change with them.
- **API**: NestJS, REST/JSON, request/response types from `packages/shared`. Verifies Supabase JWTs. Sole DB access. Scheduled job for guest cleanup.
- **DB**: Postgres, Prisma, our tables in `public` (Supabase owns `auth`). Every entity: client-generated UUID, `created_at`, `updated_at`, `deleted_at`.
- **Auth**: Supabase Auth only (ADR-0001). CAPTCHA on anonymous sign-in. The `users` row is created lazily on the first authenticated API call (upsert on the JWT subject).
- **Tests**: Vitest (shared logic; API against a test DB in the local Postgres), a few Playwright flows.

## Data model

- `users(id PK = Supabase user id, is_guest, last_seen_at, created_at, …)`; every `user_id` below is an FK to it, `ON DELETE CASCADE`.
- `catalog_categories(key PK, deprecated)`; `catalog_items(key PK, category_key FK, deprecated)`. Seeded from a keys-only file; names in locale files; CI checks every key has an `en-US` name (ADR-0002).
- `custom_categories(id, user_id, name)`.
- `lists(id, user_id, name, source_template_id FK → templates ON DELETE SET NULL, …)`.
- `list_items(id, list_id, wanted, catalog_item_key FK | custom_name, catalog_category_key FK | custom_category_id FK)`. CHECK: exactly one of item key / custom name; exactly one of category key / custom category. Unique `(list_id, catalog_item_key)` where not null.
- `templates(id, user_id, name, …)`; `template_items` (same shape, no `wanted`).
- `trips(id, user_id, name, destination, starts_on, ends_on, notes, archived)`.
- `trip_lists(id, trip_id, list_id)`; `trip_list_item_progress(trip_list_id, list_item_id, owned, prepared, packed)`, CHECK `packed ≤ prepared ≤ owned`.
- `shares(token, kind, payload JSON, owner_user_id, created_at)`.

## Local development

Docker + Supabase CLI: `supabase start` runs Postgres (:54322), Auth API (:54321), Studio (:54323) and a mail catcher; `supabase/config.toml` enables anonymous sign-ins. Web and API run natively (`pnpm dev`; Vite proxies `/api`). One root `pnpm dev` starts everything. A separate test database lives in the same local Postgres. Docker must be installed first.

## Hosting (phase 7)

Two images, deployed independently: `web` (static files behind Caddy/nginx) and `api` (Nest). One Hetzner VPS with docker-compose and Caddy (`/api/*` → api, rest → web, same origin). Cloudflare for DNS and HTTPS. Supabase hosted for Postgres and Auth. Coolify is an optional dashboard on the same box.

## Phases

See `issues/01` to `issues/07`. Order: foundation → auth + API base → Catalog/Categories/Lists → Trips + packing → Templates → sharing → deploy + polish. Capacitor mobile builds come after v1 as a separate effort.

## Open details to settle when reached

- Whether a Template created from a List should also remember its source List (symmetry with `source_template_id`).
- Exact UI for surplus and duplicate warnings (depends on designs).
- CAPTCHA provider for guest creation.
