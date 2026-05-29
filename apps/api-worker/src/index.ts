import { AiItineraryService } from '../../api/src/modules/ai/ai-itinerary.service';
import { AuthService } from '../../api/src/modules/auth/auth.service';
import { BookingsService } from '../../api/src/modules/bookings/bookings.service';
import { MarketplaceService } from '../../api/src/modules/marketplace/marketplace.service';
import { PaymentsService } from '../../api/src/modules/payments/payments.service';

type Handler = (request: Request, context: RequestContext) => Promise<Response>;

interface RequestContext {
  params: Record<string, string>;
  url: URL;
}

const authService = new AuthService();
const marketplaceService = new MarketplaceService();
const bookingsService = new BookingsService();
const paymentsService = new PaymentsService();
const aiItineraryService = new AiItineraryService();

const corsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET,POST,OPTIONS',
  'access-control-allow-headers': 'content-type,authorization',
};

function json(data: unknown, init: ResponseInit = {}) {
  return new Response(JSON.stringify(data), {
    ...init,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      ...corsHeaders,
      ...init.headers,
    },
  });
}

async function readJson(request: Request) {
  if (!request.headers.get('content-type')?.includes('application/json')) return {};
  return request.json();
}

function errorResponse(error: unknown) {
  const message = error instanceof Error ? error.message : 'Unexpected API error';
  return json({ error: { code: 'request_failed', message } }, { status: 400 });
}

function matchRoute(pattern: string, pathname: string) {
  const patternParts = pattern.split('/').filter(Boolean);
  const pathParts = pathname.split('/').filter(Boolean);
  if (patternParts.length !== pathParts.length) return null;

  const params: Record<string, string> = {};
  for (let index = 0; index < patternParts.length; index += 1) {
    const expected = patternParts[index];
    const actual = pathParts[index];
    if (!expected || !actual) return null;
    if (expected.startsWith(':')) {
      params[expected.slice(1)] = decodeURIComponent(actual);
    } else if (expected !== actual) {
      return null;
    }
  }
  return params;
}

const routes: Array<{ method: string; pattern: string; handler: Handler }> = [
  {
    method: 'GET',
    pattern: '/health',
    handler: async () =>
      json({
        status: 'ok',
        service: 'tripetrip-api',
        runtime: 'cloudflare-workers',
      }),
  },
  {
    method: 'POST',
    pattern: '/auth/register/traveler',
    handler: async (request) => json(await authService.registerTraveler(await readJson(request)), { status: 201 }),
  },
  {
    method: 'POST',
    pattern: '/auth/register/provider',
    handler: async (request) => json(await authService.registerProvider(await readJson(request)), { status: 201 }),
  },
  {
    method: 'GET',
    pattern: '/marketplace/listings',
    handler: async (_request, { url }) =>
      json(
        await marketplaceService.listListings({
          q: url.searchParams.get('q') ?? undefined,
          category: url.searchParams.get('category') ?? undefined,
          location: url.searchParams.get('location') ?? undefined,
        }),
      ),
  },
  {
    method: 'GET',
    pattern: '/marketplace/providers/:slug',
    handler: async (_request, { params }) => json(await marketplaceService.getProviderStorefront(params.slug ?? '')),
  },
  {
    method: 'POST',
    pattern: '/bookings',
    handler: async (request) => json(await bookingsService.createBooking(await readJson(request)), { status: 201 }),
  },
  {
    method: 'POST',
    pattern: '/payments/orders',
    handler: async (request) => json(await paymentsService.createOrder(await readJson(request)), { status: 201 }),
  },
  {
    method: 'POST',
    pattern: '/ai/itinerary',
    handler: async (request) => json(await aiItineraryService.generateBlueprint(await readJson(request)), { status: 201 }),
  },
];

export default {
  async fetch(request: Request): Promise<Response> {
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: corsHeaders });

    const url = new URL(request.url);
    for (const route of routes) {
      if (route.method !== request.method) continue;
      const params = matchRoute(route.pattern, url.pathname);
      if (!params) continue;

      try {
        return await route.handler(request, { params, url });
      } catch (error) {
        return errorResponse(error);
      }
    }

    return json({ error: { code: 'not_found', message: 'Route not found' } }, { status: 404 });
  },
};
