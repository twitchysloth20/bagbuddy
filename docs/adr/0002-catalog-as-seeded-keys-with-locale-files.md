# Catalog is seeded keys with foreign keys; names live in locale files

`catalog_categories` and `catalog_items` hold only stable keys (plus category and a `deprecated` flag), seeded from a keys-only file in the repo on each deploy (upsert by key, never delete). List items reference them by real foreign keys. Display names live in per-locale files (`en-US`, `fr-BE`, …) shared with the UI i18n, with a CI test that every key has an `en-US` name.

Users' own items and categories never enter these tables: they are free-text names on the List item and per-user custom category rows. This keeps the shared Catalog from growing with user input. Rejected: Catalog without tables (no DB-enforced integrity) and names stored in the DB (a second translation mechanism).
