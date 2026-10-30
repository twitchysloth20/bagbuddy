# 04 Trips and packing

Status: needs-triage
Type: task
Blocked by: 03

See ADR-0003.

## Scope
- Trips CRUD (name, destination, dates, notes, archived).
- Assign / unassign Lists (Trip lists); progress rows created at 0, kept in sync when List items are added or removed.
- Packing view per Trip list: wanted, to buy, owned, prepared, packed; enforce `packed ≤ prepared ≤ owned`.
- Surplus indicator when `prepared > wanted`; lowering `wanted` never blocks or clamps.
- Confirmation when deleting a List used by Trips.
- Pure quantity logic in `packages/shared` with unit tests.

## Done when
- The same List on two Trips has independent progress.
- Playwright: create List, create Trip, assign, pack items.

## Comments
