import { expect, test } from '@playwright/test';

test('traveler surface opens as a booking marketplace', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });

  await expect(page.getByRole('heading', { name: /Book stays, trips, taxis, and treks/i })).toBeVisible();
  await expect(page.getByRole('tab', { name: 'Hotels' })).toBeVisible();
  await expect(page.getByRole('tab', { name: 'Trips' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Rishikesh', exact: true })).toBeVisible();
  await expect(page.getByText('Popular stays')).toBeVisible();
  await expect(page.getByText('Weekend trip ideas')).toBeVisible();
  await expect(page.getByLabel('Destination')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Search' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Riverside Himalayan Homestay' })).toBeVisible();
  await expect(page.getByRole('link', { name: /Book now Riverside Himalayan Homestay/i })).toHaveAttribute(
    'href',
    '/listing/listing_riverside_homestay',
  );
});

test('traveler can move from a listing to booking details', async ({ page }) => {
  await page.goto('/listing/listing_riverside_homestay', { waitUntil: 'domcontentloaded' });

  await expect(page.getByRole('heading', { name: 'Riverside Himalayan Homestay' })).toBeVisible();
  await expect(page.getByText('Escrow protected')).toBeVisible();
  await expect(page.getByRole('link', { name: /Reserve now/i })).toHaveAttribute('href', '/bookings/booking_demo_001');
});

test('provider dashboard presents operating system modules', async ({ page }) => {
  await page.goto('/provider/dashboard', { waitUntil: 'domcontentloaded' });

  await expect(page.getByText('Provider Operating System')).toBeVisible();
  await expect(page.getByRole('heading', { name: /Manage bookings, inventory, staff/i })).toBeVisible();
  await expect(page.getByText('Booking command center')).toBeVisible();
  await expect(page.getByText('Payout tracker')).toBeVisible();
});

test('admin surface presents governance modules', async ({ page }) => {
  await page.goto('/admin', { waitUntil: 'domcontentloaded' });

  await expect(page.getByText('Platform Admin')).toBeVisible();
  await expect(page.getByRole('heading', { name: /Govern trust, safety, vendors/i })).toBeVisible();
  await expect(page.getByText('KYC review')).toBeVisible();
  await expect(page.getByText('Audit logs')).toBeVisible();
});
