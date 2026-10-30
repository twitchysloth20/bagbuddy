#!/usr/bin/env bash
# Creates the bagbuddy_test database inside the local Supabase Postgres (idempotent).
set -euo pipefail

container="supabase_db_bagbuddy"
exists=$(docker exec "$container" psql -U postgres -tAc "SELECT 1 FROM pg_database WHERE datname = 'bagbuddy_test'")
if [ "$exists" != "1" ]; then
  docker exec "$container" psql -U postgres -c "CREATE DATABASE bagbuddy_test"
fi
