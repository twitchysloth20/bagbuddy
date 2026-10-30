# Supabase Auth for identity, NestJS as the only data access, guests as anonymous users

We use Supabase Auth only for sign-in (email, OAuth, anonymous sign-ins for Guests); the NestJS API verifies its JWT and is the sole reader/writer of Postgres (no Supabase auto-API, no row-level security). A `users` table in `public`, keyed by the Supabase user id, is the target of every `user_id` foreign key and carries `is_guest` and `last_seen_at`. Guests upgrade in place (same id); Supabase has no automatic guest cleanup, so the API runs a scheduled job deleting Guests inactive for 90 days.

Considered: hand-rolled auth (too risky for a first backend), a self-hosted auth library in Nest, and full Supabase with RLS (would replace the Nest backend we want to build). The cost of this choice is vendor dependence for identity; data stays in plain Postgres so the rest is portable.
