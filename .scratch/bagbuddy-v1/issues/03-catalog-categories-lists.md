# 03 Catalog, Categories and Lists

Status: needs-triage
Type: task
Blocked by: 02

See ADR-0002 and the domain rules in `../spec.md`.

## Scope
- Keys-only Catalog seed file, seed script (upsert by key, deprecate never delete), `GET /catalog`.
- Locale files for Catalog names; CI test that every key has an `en-US` name; humanized-key fallback for unknown keys.
- Custom categories (CRUD, per user).
- Lists CRUD; List items with Catalog or Custom item, Category, `wanted`; grouped by Category; autocomplete over translated names.
- DB CHECKs (one item source, one category source) and unique `(list_id, catalog_item_key)`.
- Duplicate Catalog item: warning plus scroll to the existing row. Renaming a Catalog-backed item turns it into a Custom item keeping its Category.

## Done when
- A user can build a List from suggestions and custom items, grouped by Category.
- API tests cover the CHECKs and the duplicate rule.

## Comments
