# Third-Party Services

Services currently present in code, dependencies, infrastructure, or production architecture:

| Service | Where | Purpose | Status |
| --- | --- | --- | --- |
| Cloudflare Workers | `wrangler.jsonc`, `wrangler.api.jsonc` | Frontend OpenNext runtime and backend edge API | Deployment configured |
| Cloudflare Pages | `wrangler.pages.jsonc` | Static frontend export and Git-connected preview path | Deployment configured |
| Cloudflare Wrangler | dev dependency | Build, preview, and deploy Workers/Pages | Installed |
| OpenNext Cloudflare adapter | `open-next.config.ts` | Adapts Next.js App Router to Cloudflare Workers | Installed |
| PostgreSQL | `packages/database/schema.sql`, docs | Canonical relational database | Schema ready, external service required |
| Redis | docs, `infra/docker/docker-compose.yml` | Cache, locks, sessions, idempotency, short-lived queues | Local infra contract |
| Kafka | docs, `infra/docker/docker-compose.yml` | Durable business events | Local infra contract |
| Elasticsearch/OpenSearch | docs, `infra/docker/docker-compose.yml` | Search, discovery, analytics indexing | Local infra contract |
| Razorpay | dependency and payment services | India payment orders, escrow flow, settlement architecture | Dependency present, adapter contract |
| Stripe | docs | International card/payment architecture | Planned integration |
| UPI | docs | India payment rail | Planned integration |
| Cloudinary | dependency and docs | Listing/provider media storage and delivery | Dependency present |
| Google GenAI | dependency | AI itinerary/planning model provider option | Dependency present |
| Mapbox | dependency | Maps, route context, geo discovery | Dependency present |
| WhatsApp provider | docs and module | Conversational commerce and notifications | Module contract |
| Email provider | docs and notification service | Transactional and marketing email | Contract |
| SMS provider | docs and notification service | OTP and notification delivery | Contract |
| Push notifications | docs and notification service | Traveler/provider app notifications | Contract |
| Sentry | docs | Frontend/backend observability and errors | Planned integration |
| Docker | `infra/docker/docker-compose.yml` | Local Postgres, Redis, Kafka, Elasticsearch | Configured |
| Kubernetes | `infra/k8s` | Container deployment option for web/api/worker | Manifests present |

No production secrets are committed. Configure live keys in Cloudflare environment variables or secrets.
