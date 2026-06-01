# Cloudflare Deployment

TripETrip is prepared for two Cloudflare deployment modes:

- **Frontend production:** Cloudflare Workers with OpenNext.
- **Frontend static fallback / preview:** Cloudflare Pages static export.
- **Backend production:** Backend Worker API using the existing TypeScript service layer.

## Frontend: Cloudflare Workers

Use this path for the production frontend because it supports the Next.js App Router through the OpenNext Cloudflare adapter.

```bash
npm ci
npm run lint
npm run test:api
npm run test:e2e
npm run build:cloudflare
npm run deploy:cloudflare
```

Cloudflare Git-connected build command:

```bash
npm ci && npm run lint && npm run test:api && npm run build:cloudflare
```

Deploy command:

```bash
npx wrangler deploy
```

`wrangler.jsonc` also defines `build.command = "npm run build:cloudflare"`, so a Git-connected Cloudflare deploy command of `npx wrangler deploy` will generate `apps/web/.open-next/worker.js` before publishing.

Required config:

- `wrangler.jsonc`
- `wrangler.api.jsonc`
- `wrangler.pages.jsonc`
- `open-next.config.ts`
- `compatibility_flags: ["nodejs_compat"]`
- assets served from `.open-next/assets`

Required Cloudflare values:

- `CF_ACCOUNT_ID` -> Cloudflare account ID
- `CF_API_TOKEN` -> Cloudflare API token for Wrangler deployment
- `NEXT_PUBLIC_API_BASE_URL` -> deployed API base URL for the frontend
- `CORS_ORIGIN` -> deployed frontend origin for the API worker

Update these values in the environment or use `wrangler secret put` for live secrets. Never commit production secrets.

## Frontend: Cloudflare Pages

Use Pages when you want a static Git-connected deployment for the current marketing/product surfaces.

```bash
npm ci
npm run build:pages
npm run deploy:pages
```

Cloudflare Pages Git settings:

- Framework preset: None
- Build command: `npm ci && npm run build:pages`
- Build output directory: `apps/web/out`
- Root directory: repository root

Dynamic demo routes are exported through `generateStaticParams`.

## Backend Worker API

The backend Worker is in `apps/api-worker/src/index.ts`. It exposes production-safe JSON endpoints that reuse current services:

- `GET /health`
- `POST /auth/register/traveler`
- `POST /auth/register/provider`
- `GET /marketplace/listings`
- `GET /marketplace/providers/:slug`
- `POST /bookings`
- `POST /payments/orders`
- `POST /ai/itinerary`

Deploy:

```bash
npm ci
npm run build:api-worker
npm run deploy:api
```

Cloudflare config:

- `wrangler.api.jsonc`
- Worker name: `tripetrip-api`
- Main entry: `apps/api-worker/src/index.ts`

## Production Variables

Set these in Cloudflare dashboard or Wrangler secrets/vars:

- `NEXT_PUBLIC_API_BASE_URL`
- `CORS_ORIGIN`
- future secrets: payment gateway keys, AI keys, Cloudinary keys, database URL.

Never commit live secrets.

## Git-Connected Release Gate

Before merging to the deployment branch:

```bash
npm run lint
npm run test:api
npm run test:e2e -- --reporter=list --workers=1
npm run build
npm run build:pages
npm run build:api-worker
```

Use Workers/OpenNext as the primary frontend deployment and Pages as the static export path.
