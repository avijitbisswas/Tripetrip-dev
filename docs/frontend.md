# Frontend

The frontend is a Next.js App Router application in `apps/web`.

## Surfaces

- Traveler: marketplace, discovery, search, map, listing, trip planner, trips, bookings, wallet, wishlist, community, memories, safety.
- Provider: dashboard, onboarding, KYC, listings, inventory, bookings, calendar, pricing, staff, operations, fleet, adventure, CRM, marketing, payouts, analytics, settings, storefront.
- Admin: users, vendors, KYC, listings, bookings, payments, refunds, fraud, trust-safety, community, CMS, subscriptions, support, audit logs, AI, analytics.

## Shared UI Data

- `apps/web/src/modules/shared/featureCatalog.ts` owns the route content.
- `apps/web/src/modules/shared/FeaturePage.tsx` renders the reusable feature surface.
- `apps/web/src/modules/shared/AppShell.tsx` owns the global shell.

## Cloudflare Targets

- Workers/OpenNext: full Next.js deployment.
- Pages/static export: static frontend fallback and preview path.

## Local Verification

```bash
npm run lint
npm run test:e2e -- --reporter=list --workers=1
npm run build:web
npm run build:pages
```
