# Traveller Booking Mode Design

## Goal

Make the first screen feel like a modern traveller booking site, similar in intent to MakeMyTrip or Booking.com: search-first, listing-led, and clearly bookable.

## Scope

- Replace the generic traveller landing feel with a commercial booking homepage.
- Add a large heroic search panel with category tabs, destination, dates, guests, and a primary search action.
- Show curated bookable inventory immediately below the search.
- Keep provider and admin access available but secondary.
- Keep the flow static/demo-safe for this milestone: search scrolls to listings, listing detail routes to demo booking detail.

## UX Structure

1. Hero section with a destination image, traveller-first headline, and concise trust copy.
2. Floating booking search panel with:
   - Hotels
   - Trips
   - Taxis
   - Treks
   - Destination
   - Check-in
   - Check-out
   - Guests and rooms
   - Search button
3. Quick destination chips for common searches.
4. Featured listings with ratings, prices, cancellation/support notes, and booking CTAs.
5. Secondary traveller sections for weekend trips, taxi packages, and treks.
6. Listing detail remains the next step in the flow, with gallery, pricing, date summary, escrow/trust notes, and Reserve CTA.

## Constraints

- No real payment/auth/availability is introduced in this milestone.
- Existing static export and OpenNext Cloudflare deployment must keep working.
- Provider and admin routes must remain intact.
- E2E tests should verify the homepage opens as traveller mode and a listing can route to booking detail.
