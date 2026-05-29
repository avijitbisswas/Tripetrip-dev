# Backend

TripETrip has two backend entry points:

- `apps/api`: NestJS API gateway and module structure.
- `apps/api-worker`: Cloudflare Worker API for edge deployment.

The Worker API reuses the existing TypeScript service layer for:

- Auth registration.
- Marketplace listings and provider storefronts.
- Booking creation.
- Payment order creation.
- AI itinerary generation.

## Cloudflare Worker Routes

- `GET /health`
- `POST /auth/register/traveler`
- `POST /auth/register/provider`
- `GET /marketplace/listings`
- `GET /marketplace/providers/:slug`
- `POST /bookings`
- `POST /payments/orders`
- `POST /ai/itinerary`

## Verification

```bash
npm run test:api
npm run build:api
npm run build:api-worker
```

The NestJS app remains useful for a future Node/container deployment. The Worker API is the Cloudflare-compatible backend deployment path.
