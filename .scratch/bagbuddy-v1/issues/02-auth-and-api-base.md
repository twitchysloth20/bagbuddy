# 02 Auth and API base

Status: needs-triage
Type: task
Blocked by: 01

Guests, Accounts and the API skeleton. See ADR-0001.

## Scope
- Web: anonymous sign-in on first launch; sign-up / sign-in (email, OAuth) that upgrades the Guest in place (`updateUser`, `linkIdentity`); CAPTCHA on guest creation.
- API: Supabase JWT guard; lazy `users` upsert on first authenticated call; updates `last_seen_at`.
- Existing-Account sign-in from a Guest session: offer to copy the Guest's data (copy logic reused later by Lists/Templates).
- Account deletion: cascades through user data and deletes the Supabase user via the admin API.
- Scheduled job deleting Guests inactive 90 days.
- Shared `packages/shared` request/response types and validation; error format.

## Done when
- A new visitor is a Guest automatically; upgrading keeps their id and data.
- Deleting an Account removes all their rows and their Supabase user.
- API tests cover the guard, upsert, deletion and cleanup job.

## Comments
