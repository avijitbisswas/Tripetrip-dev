import { FeaturePage } from '../../../modules/shared/FeaturePage';
import { travelerFeatures } from '../../../modules/shared/featureCatalog';
import { AppShell } from '../../../modules/shared/AppShell';

export function generateStaticParams() {
  return [{ id: 'listing_riverside_homestay' }];
}

export const dynamicParams = false;

export default function ListingPage() {
  return (
    <AppShell>
      <FeaturePage feature={travelerFeatures.listing} />
    </AppShell>
  );
}
