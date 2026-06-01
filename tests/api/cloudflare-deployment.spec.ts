import { existsSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const packageJson = JSON.parse(readFileSync('package.json', 'utf8')) as {
  scripts: Record<string, string>;
  devDependencies?: Record<string, string>;
};

describe('Cloudflare deployment readiness', () => {
  it('configures OpenNext deployment to Cloudflare Workers', () => {
    const wrangler = readFileSync('wrangler.jsonc', 'utf8');

    expect(existsSync('open-next.config.ts')).toBe(true);
    expect(wrangler).toContain('"main": "apps/web/.open-next/worker.js"');
    expect(wrangler).toContain('"directory": "apps/web/.open-next/assets"');
    expect(wrangler).toContain('"nodejs_compat"');
    expect(packageJson.scripts['build:cloudflare']).toContain('opennextjs-cloudflare build');
    expect(packageJson.scripts['deploy:cloudflare']).toContain('wrangler deploy');
  });

  it('does not commit Cloudflare account placeholders into deployment configs', () => {
    for (const path of ['wrangler.jsonc', 'wrangler.api.jsonc', 'wrangler.pages.jsonc']) {
      const config = readFileSync(path, 'utf8');
      expect(config).not.toContain('REPLACE_WITH_CF_ACCOUNT_ID');
      expect(config).not.toContain('REPLACE_WITH_CF_ZONE_ID');
      expect(config).not.toContain('"zone_id"');
    }
  });

  it('configures a backend Cloudflare Worker API that reuses existing service logic', () => {
    const apiWrangler = readFileSync('wrangler.api.jsonc', 'utf8');
    const worker = readFileSync('apps/api-worker/src/index.ts', 'utf8');

    expect(existsSync('apps/api-worker/package.json')).toBe(true);
    expect(apiWrangler).toContain('"main": "apps/api-worker/src/index.ts"');
    expect(apiWrangler).toContain('"name": "tripetrip-api"');
    expect(apiWrangler).toContain('"nodejs_compat"');
    expect(worker).toContain('MarketplaceService');
    expect(worker).toContain('BookingsService');
    expect(worker).toContain('PaymentsService');
    expect(packageJson.scripts['build:api-worker']).toContain('tsc --project apps/api-worker/tsconfig.json');
    expect(packageJson.scripts['deploy:api']).toContain('wrangler deploy --config wrangler.api.jsonc');
  });

  it('defines a Cloudflare Pages static export path for Git-connected preview deployments', () => {
    const pagesWrangler = readFileSync('wrangler.pages.jsonc', 'utf8');
    const nextConfig = readFileSync('apps/web/next.config.ts', 'utf8');
    const listingPage = readFileSync('apps/web/src/app/listing/[id]/page.tsx', 'utf8');
    const bookingPage = readFileSync('apps/web/src/app/bookings/[id]/page.tsx', 'utf8');
    const providerPage = readFileSync('apps/web/src/app/provider/[slug]/page.tsx', 'utf8');

    expect(pagesWrangler).toContain('"pages_build_output_dir": "apps/web/out"');
    expect(nextConfig).toContain('NEXT_OUTPUT');
    expect(packageJson.scripts['build:pages']).toContain('NEXT_OUTPUT=export');
    expect(packageJson.scripts['deploy:pages']).toContain('wrangler pages deploy apps/web/out');
    expect(listingPage).toContain('generateStaticParams');
    expect(bookingPage).toContain('generateStaticParams');
    expect(providerPage).toContain('generateStaticParams');
  });

  it('documents production deployment and third-party services', () => {
    const deploymentDoc = readFileSync('docs/deployment/cloudflare.md', 'utf8');
    const servicesDoc = readFileSync('docs/third-party-services.md', 'utf8');

    expect(deploymentDoc).toContain('Cloudflare Workers');
    expect(deploymentDoc).toContain('Cloudflare Pages');
    expect(deploymentDoc).toContain('Git-connected');
    expect(deploymentDoc).toContain('Backend Worker API');
    expect(existsSync('docs/frontend.md')).toBe(true);
    expect(existsSync('docs/backend.md')).toBe(true);
    expect(existsSync('docs/database.md')).toBe(true);
    expect(servicesDoc).toContain('Cloudflare');
    expect(servicesDoc).toContain('Cloudinary');
    expect(servicesDoc).toContain('Razorpay');
    expect(servicesDoc).toContain('Mapbox');
    expect(servicesDoc).toContain('Google GenAI');
  });
});
