# 01 Foundation

Status: ready-for-agent
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

### Implementation notes (2026-10-30)
- Verified locally: lint, typecheck, 7 unit tests (shared i18n resolver/translator, web App render, API `/api/health`), `pnpm dev` brings up all Supabase containers + API + web, `/api` proxy works, `bagbuddy_test` DB exists, Prisma connects, Playwright smoke test passes (run with `PW_CHANNEL=chrome` on hosts Playwright doesn't support).
- Not yet verified: CI on a real PR (commit `pnpm-lock.yaml`; CI uses `--frozen-lockfile`).
- Decisions: ESLint-only (flat config + `@stylistic`), no Prettier. TypeScript pinned to ~5.9 (vue-tsc doesn't support 7). pnpm 11 needs `allowBuilds` in `pnpm-workspace.yaml`.
- Local dev gotcha: Docker needs several GB of free disk write throughput on first `supabase start` (image extraction); slow SSDs can make "starting database" look hung.
