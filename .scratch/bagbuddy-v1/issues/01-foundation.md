# 01 Foundation

Status: needs-triage
Type: task

Monorepo, tooling and local environment. See `../spec.md`.

## Scope
- Install Docker (not currently on the dev machine).
- pnpm workspace: `apps/web` (Vue 3 + TS strict + Vite, router, Pinia), `apps/api` (NestJS), `packages/shared`.
- Token-based CSS foundation (custom properties), mobile-first reset. No component libraries.
- i18n layer with `en-US` locale files and fallback chain; all UI strings go through it.
- Supabase CLI project (`supabase/config.toml`, anonymous sign-ins on); Prisma set up against the local Postgres; test database.
- Root `pnpm dev` starts Supabase, API and web. Vite proxies `/api` to Nest.
- Vitest in all packages; Playwright skeleton; CI (lint, typecheck, test) with path filters per app.

## Done when
- A fresh clone plus Docker reaches a running empty app with one command.
- CI runs on a PR and is green.

## Comments
