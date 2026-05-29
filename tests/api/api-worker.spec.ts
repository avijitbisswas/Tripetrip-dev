import { describe, expect, it } from 'vitest';
import worker from '../../apps/api-worker/src/index';

const corsEnv = {
  CORS_ORIGIN: 'https://app.tripetrip.example',
};

describe('Cloudflare API Worker runtime behavior', () => {
  it('honors configured CORS origin for preflight requests', async () => {
    const response = await worker.fetch(
      new Request('https://api.tripetrip.example/bookings', {
        method: 'OPTIONS',
        headers: {
          origin: corsEnv.CORS_ORIGIN,
          'access-control-request-method': 'POST',
        },
      }),
      corsEnv,
    );

    expect(response.status).toBe(204);
    expect(response.headers.get('access-control-allow-origin')).toBe(corsEnv.CORS_ORIGIN);
    expect(response.headers.get('vary')).toContain('Origin');
  });

  it('matches Nest auth registration route names', async () => {
    const response = await worker.fetch(
      new Request('https://api.tripetrip.example/auth/register-traveler', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          origin: corsEnv.CORS_ORIGIN,
        },
        body: JSON.stringify({
          email: 'traveler@example.com',
          password: 'super-secret-password',
          fullName: 'Demo Traveler',
          phone: '+919999999999',
        }),
      }),
      corsEnv,
    );
    const payload = (await response.json()) as { user: { role: string; email: string } };

    expect(response.status).toBe(201);
    expect(response.headers.get('access-control-allow-origin')).toBe(corsEnv.CORS_ORIGIN);
    expect(payload.user.email).toBe('traveler@example.com');
    expect(payload.user.role).toBe('traveler');
  });

  it('matches Nest AI itinerary route name', async () => {
    const response = await worker.fetch(
      new Request('https://api.tripetrip.example/ai/itineraries', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          origin: corsEnv.CORS_ORIGIN,
        },
        body: JSON.stringify({
          destination: 'Rishikesh',
          startDate: '2026-06-01T00:00:00.000Z',
          endDate: '2026-06-04T00:00:00.000Z',
          travelerCount: 2,
          budget: 25000,
          interests: ['rafting', 'temples'],
        }),
      }),
      corsEnv,
    );
    const payload = (await response.json()) as { destination: string; activities: unknown[] };

    expect(response.status).toBe(201);
    expect(payload.destination).toBe('Rishikesh');
    expect(payload.activities).toHaveLength(2);
  });
});
