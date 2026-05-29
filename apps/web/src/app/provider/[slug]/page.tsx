import { FeaturePage } from '../../../modules/shared/FeaturePage';
import { travelerFeatures } from '../../../modules/shared/featureCatalog';
import { AppShell } from '../../../modules/shared/AppShell';

export function generateStaticParams() {
  return [{ slug: 'demo-himalayan-collective' }];
}

export const dynamicParams = false;

export default function ProviderStorefrontPublicPage() {
  return (
    <AppShell>
      <FeaturePage feature={travelerFeatures.provider} />
    </AppShell>
  );
}
