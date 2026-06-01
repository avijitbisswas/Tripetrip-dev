import { AppShell } from '../../../modules/shared/AppShell';
import { ListingDetail } from '../../../modules/traveler/ListingDetail';

export function generateStaticParams() {
  return [{ id: 'listing_riverside_homestay' }];
}

export const dynamicParams = false;

export default function ListingPage() {
  return (
    <AppShell>
      <ListingDetail />
    </AppShell>
  );
}
