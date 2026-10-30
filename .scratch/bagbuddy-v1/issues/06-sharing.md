# 06 Sharing

Status: needs-triage
Type: task
Blocked by: 02, 05

See ADR-0004.

## Scope
- Create a Share link for a List or Template: immutable JSON snapshot in `shares`, unguessable token.
- Public preview page (works for Guests); "add a copy" creates an independent List or Template for the recipient. Lists carry items and `wanted`, never progress.
- Revoke / delete a Share link; account deletion removes the user's links.
- Rate limiting and size limits on snapshot creation.

## Done when
- Sender deletes the original and revokes the link; the recipient's copy is untouched.

## Comments
