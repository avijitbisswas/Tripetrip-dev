# Database

Database schema lives in `packages/database`.

## Files

- `packages/database/schema.sql`: canonical PostgreSQL schema.
- `packages/database/seed.sql`: seed data.
- `packages/database/README.md`: package-level notes.

## Current Scope

The schema covers identity, organizations, listings, bookings, payment events, ledger entries, operations, transport, AI itineraries, community, notifications, trust and safety, and audit logs.

## Production Direction

Cloudflare Workers do not run PostgreSQL directly. For production, use one of these:

- Managed PostgreSQL with a pooled HTTP-compatible driver or proxy.
- Cloudflare Hyperdrive in front of PostgreSQL.
- Cloudflare D1 only if the product deliberately moves from PostgreSQL semantics to SQLite semantics.

Keep schema changes in SQL migrations under `packages/database` and verify with:

```bash
npm run test:api -- tests/api/database-schema.spec.ts
```

## Deployment Rule

Apply database changes before deploying API code that depends on them, and keep rollback SQL for destructive changes.
