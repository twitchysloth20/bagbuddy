# 05 Templates

Status: needs-triage
Type: task
Blocked by: 03

See ADR-0004.

## Scope
- Templates CRUD (items and Categories, no quantities).
- Create a List from a Template: copy items, record `source_template_id`, user fills quantities; show the source Template on the List.
- Save a List as a Template (drops quantities).
- Deleting a Template nulls `source_template_id` on Lists made from it.

## Done when
- Editing a Template afterwards does not change Lists made from it, and the List still shows where it came from.

## Comments
