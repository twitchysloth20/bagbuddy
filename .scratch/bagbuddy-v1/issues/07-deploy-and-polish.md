# 07 Deploy and polish

Status: needs-triage
Type: task
Blocked by: 04, 06

## Scope
- Dockerfiles for `web` (static files behind Caddy/nginx) and `api`; independent CI build and deploy via path filters.
- Hetzner VPS with docker-compose and Caddy (`/api/*` → api, rest → web); Cloudflare DNS and HTTPS; hosted Supabase project (Postgres + Auth, CAPTCHA configured). Coolify is an option for a dashboard.
- Apply the owner's designs (mobile-first, tokens ready for themes).
- Backups and secret handling checked; first-deploy runbook.

## Done when
- The app runs at its own domain; web and api deploy separately.

## Later (separate effort)
Capacitor mobile builds with offline sync.

## Comments
