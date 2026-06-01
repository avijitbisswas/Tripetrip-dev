import Link from 'next/link';

const searchTabs = ['Hotels', 'Trips', 'Taxis', 'Treks'];
const quickDestinations = ['Rishikesh', 'Manali', 'Goa', 'Jaipur', 'Meghalaya'];

const popularStays = [
  {
    id: 'listing_riverside_homestay',
    title: 'Riverside Himalayan Homestay',
    location: 'Rishikesh, Uttarakhand',
    rating: '4.8',
    reviews: '214 reviews',
    price: 'Rs. 3,200',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    badge: 'Verified host',
    note: 'Free cancellation before 24 Jun',
  },
  {
    id: 'listing_forest_retreat',
    title: 'Forest View Boutique Stay',
    location: 'Manali, Himachal Pradesh',
    rating: '4.7',
    reviews: '168 reviews',
    price: 'Rs. 4,150',
    image: 'https://images.unsplash.com/photo-1501117716987-c8e1ecb210bd?auto=format&fit=crop&w=900&q=80',
    badge: 'Breakfast included',
    note: 'Valley rooms selling fast',
  },
  {
    id: 'listing_beach_villa',
    title: 'North Goa Beach Villa',
    location: 'Mandrem, Goa',
    rating: '4.6',
    reviews: '132 reviews',
    price: 'Rs. 5,900',
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=900&q=80',
    badge: 'Couple friendly',
    note: 'Pay later request available',
  },
];

const weekendTrips = [
  { title: 'Rafting weekend in Rishikesh', meta: '2 nights · stay + activity + taxi', price: 'Rs. 7,499' },
  { title: 'Jaipur heritage escape', meta: '3 days · hotel + guide + transfers', price: 'Rs. 9,850' },
  { title: 'Meghalaya waterfall circuit', meta: '4 days · homestays + cab', price: 'Rs. 14,200' },
];

const serviceCards = [
  { title: 'Airport taxi packages', detail: 'Certified drivers, fixed fare, live support', href: '/search' },
  { title: 'Guided treks', detail: 'Verified guides, slots, waivers, safety kit', href: '/discover' },
  { title: 'AI trip planner', detail: 'Build a stay, activity, taxi plan in seconds', href: '/trip-planner' },
];

const trustItems = ['Escrow protected', 'Verified local providers', 'Instant booking request', '24x7 trip support'];

export function TravelerHome() {
  return (
    <section style={{ background: '#eef4ff' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '24px 20px 76px' }}>
        <div
          style={{
            minHeight: 430,
            display: 'grid',
            alignItems: 'end',
            borderRadius: 8,
            overflow: 'hidden',
            backgroundImage:
              'linear-gradient(90deg, rgba(3,7,18,0.82), rgba(15,23,42,0.22)), url(https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1800&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#fff',
          }}
        >
          <div style={{ maxWidth: 760, padding: '46px 28px 136px' }}>
            <p style={{ margin: 0, textTransform: 'uppercase', fontSize: 12, fontWeight: 900, letterSpacing: 0 }}>
              Traveller booking mode
            </p>
            <h1 style={{ fontSize: 'clamp(34px, 7vw, 76px)', lineHeight: 1, letterSpacing: 0, margin: '12px 0' }}>
              Book stays, trips, taxis, and treks from trusted local providers.
            </h1>
            <p style={{ maxWidth: 620, margin: 0, fontSize: 18, lineHeight: 1.6, color: '#e2e8f0' }}>
              Compare verified inventory, lock a trip plan, and reserve with escrow-backed support.
            </p>
          </div>
        </div>

        <form
          aria-label="Trip search"
          style={{
            margin: '-92px auto 26px',
            position: 'relative',
            display: 'grid',
            gap: 18,
            background: '#fff',
            border: '1px solid #dbeafe',
            borderRadius: 8,
            padding: 18,
            boxShadow: '0 24px 70px rgba(15,23,42,0.18)',
          }}
        >
          <div role="tablist" aria-label="Booking category" style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {searchTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={tab === 'Hotels'}
                style={{
                  border: tab === 'Hotels' ? '1px solid #1d4ed8' : '1px solid #cbd5e1',
                  borderRadius: 999,
                  background: tab === 'Hotels' ? '#1d4ed8' : '#fff',
                  color: tab === 'Hotels' ? '#fff' : '#0f172a',
                  padding: '10px 18px',
                  fontWeight: 900,
                  boxShadow: tab === 'Hotels' ? '0 10px 22px rgba(37,99,235,0.22)' : 'none',
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 0.9fr 0.9fr 1fr 150px', gap: 10 }}>
            <label style={fieldStyle}>
              Destination
              <input defaultValue="Rishikesh" style={inputStyle} />
            </label>
            <label style={fieldStyle}>
              Check-in
              <input defaultValue="24 Jun" style={inputStyle} />
            </label>
            <label style={fieldStyle}>
              Check-out
              <input defaultValue="27 Jun" style={inputStyle} />
            </label>
            <label style={fieldStyle}>
              Guests & rooms
              <input defaultValue="2 adults, 1 room" style={inputStyle} />
            </label>
            <button type="button" style={searchButtonStyle}>
              Search
            </button>
          </div>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ color: '#64748b', fontSize: 13, fontWeight: 800 }}>Popular:</span>
            {quickDestinations.map((destination) => (
              <a key={destination} href="#popular-stays" style={chipStyle}>
                {destination}
              </a>
            ))}
          </div>
        </form>

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 30 }}>
          {trustItems.map((item) => (
            <span key={item} style={trustPillStyle}>
              {item}
            </span>
          ))}
        </div>

        <section id="popular-stays" style={{ display: 'grid', gap: 16, marginBottom: 34 }}>
          <SectionHeader eyebrow="Handpicked hotels and homestays" title="Popular stays" href="/search" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(285px, 1fr))', gap: 18 }}>
            {popularStays.map((listing) => (
              <article key={listing.id} style={listingCardStyle}>
                <img src={listing.image} alt="" style={{ width: '100%', height: 205, objectFit: 'cover', display: 'block' }} />
                <div style={{ padding: 18 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'start' }}>
                    <div>
                      <h3 style={{ margin: 0, fontSize: 20 }}>{listing.title}</h3>
                      <p style={{ margin: '6px 0 0', color: '#64748b', fontWeight: 700 }}>{listing.location}</p>
                    </div>
                    <strong style={{ background: '#16a34a', color: '#fff', borderRadius: 6, padding: '5px 8px' }}>{listing.rating}</strong>
                  </div>
                  <p style={{ margin: '14px 0 0', color: '#475569', fontSize: 14, fontWeight: 700 }}>
                    {listing.badge} - {listing.reviews}
                  </p>
                  <p style={{ margin: '8px 0 16px', color: '#64748b', fontSize: 14 }}>{listing.note}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                    <div>
                      <strong style={{ fontSize: 22 }}>{listing.price}</strong>
                      <span style={{ color: '#64748b', fontSize: 13 }}> / night</span>
                    </div>
                    <Link href="/listing/listing_riverside_homestay" aria-label={`Book now ${listing.title}`} style={buttonLinkStyle}>
                      Book now
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section style={{ display: 'grid', gap: 16, marginBottom: 34 }}>
          <SectionHeader eyebrow="Curated short breaks" title="Weekend trip ideas" href="/trip-planner" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {weekendTrips.map((trip) => (
              <Link key={trip.title} href="/trip-planner" style={compactCardStyle}>
                <span style={{ color: '#2563eb', fontSize: 12, fontWeight: 900, textTransform: 'uppercase' }}>Package</span>
                <strong style={{ display: 'block', marginTop: 8, fontSize: 20 }}>{trip.title}</strong>
                <span style={{ display: 'block', marginTop: 8, color: '#64748b', lineHeight: 1.5 }}>{trip.meta}</span>
                <span style={{ display: 'block', marginTop: 16, fontWeight: 900 }}>{trip.price}</span>
              </Link>
            ))}
          </div>
        </section>

        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
          {serviceCards.map((service) => (
            <Link key={service.title} href={service.href} style={serviceCardStyle}>
              <strong style={{ fontSize: 20 }}>{service.title}</strong>
              <span style={{ marginTop: 8, color: '#475569', lineHeight: 1.5 }}>{service.detail}</span>
            </Link>
          ))}
        </section>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, href }: { eyebrow: string; title: string; href: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', gap: 16 }}>
      <div>
        <p style={{ margin: 0, color: '#2563eb', fontSize: 12, fontWeight: 900, textTransform: 'uppercase', letterSpacing: 0 }}>
          {eyebrow}
        </p>
        <h2 style={{ margin: '6px 0 0', fontSize: 30, letterSpacing: 0 }}>{title}</h2>
      </div>
      <Link href={href} style={{ fontWeight: 900, color: '#2563eb' }}>
        View all
      </Link>
    </div>
  );
}

const fieldStyle = {
  display: 'grid',
  gap: 6,
  fontSize: 13,
  fontWeight: 900,
  color: '#334155',
};

const inputStyle = {
  width: '100%',
  border: '1px solid #cbd5e1',
  borderRadius: 8,
  padding: '15px 13px',
  font: 'inherit',
  fontSize: 16,
  fontWeight: 800,
  color: '#0f172a',
  background: '#f8fafc',
};

const searchButtonStyle = {
  alignSelf: 'end',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 52,
  borderRadius: 8,
  background: '#f97316',
  color: '#fff',
  padding: '0 18px',
  fontSize: 18,
  fontWeight: 900,
  boxShadow: '0 12px 24px rgba(249,115,22,0.28)',
};

const chipStyle = {
  border: '1px solid #bfdbfe',
  borderRadius: 999,
  padding: '8px 12px',
  background: '#eff6ff',
  color: '#1d4ed8',
  fontSize: 13,
  fontWeight: 900,
};

const trustPillStyle = {
  border: '1px solid #cbd5e1',
  borderRadius: 999,
  padding: '8px 12px',
  background: '#fff',
  fontSize: 13,
  fontWeight: 800,
};

const listingCardStyle = {
  background: '#fff',
  border: '1px solid #dbeafe',
  borderRadius: 8,
  overflow: 'hidden',
  boxShadow: '0 14px 32px rgba(15,23,42,0.08)',
};

const buttonLinkStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 42,
  borderRadius: 8,
  background: '#2563eb',
  color: '#fff',
  padding: '0 14px',
  fontWeight: 900,
};

const compactCardStyle = {
  display: 'grid',
  alignContent: 'start',
  minHeight: 175,
  background: '#fff',
  border: '1px solid #dbeafe',
  borderRadius: 8,
  padding: 20,
  boxShadow: '0 10px 24px rgba(15,23,42,0.06)',
};

const serviceCardStyle = {
  display: 'grid',
  background: '#f8fafc',
  border: '1px solid #cbd5e1',
  borderRadius: 8,
  padding: 20,
};
