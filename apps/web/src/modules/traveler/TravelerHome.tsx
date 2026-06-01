import Link from 'next/link';

const categories = ['Stays', 'Trips', 'Taxis', 'Treks'];

const featuredListings = [
  {
    id: 'listing_riverside_homestay',
    title: 'Riverside Himalayan Homestay',
    location: 'Rishikesh, Uttarakhand',
    rating: '4.8',
    reviews: '214 reviews',
    price: 'Rs. 3,200',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    badge: 'Verified host',
    note: 'Free cancellation before 24 Jun',
  },
  {
    id: 'listing_trek_escape',
    title: 'Nag Tibba Guided Trek',
    location: 'Mussoorie, Uttarakhand',
    rating: '4.7',
    reviews: '126 reviews',
    price: 'Rs. 2,499',
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80',
    badge: 'Certified guide',
    note: 'Waiver and safety kit included',
  },
  {
    id: 'listing_taxi_transfer',
    title: 'Airport to Hills Taxi Package',
    location: 'Dehradun to Rishikesh',
    rating: '4.6',
    reviews: '98 reviews',
    price: 'Rs. 1,850',
    image:
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80',
    badge: 'Zero commission taxi',
    note: 'Certified driver and live support',
  },
];

const trustItems = ['Escrow protected', 'Verified local providers', 'Instant booking request', '24x7 trip support'];

export function TravelerHome() {
  return (
    <section style={{ maxWidth: 1180, margin: '0 auto', padding: '32px 20px 72px' }}>
      <div
        style={{
          minHeight: 390,
          display: 'grid',
          alignItems: 'end',
          borderRadius: 8,
          overflow: 'hidden',
          backgroundImage:
            'linear-gradient(90deg, rgba(15,23,42,0.78), rgba(15,23,42,0.18)), url(https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
        }}
      >
        <div style={{ maxWidth: 760, padding: '44px 24px 110px' }}>
          <p style={{ margin: 0, textTransform: 'uppercase', fontSize: 12, fontWeight: 900, letterSpacing: 0 }}>
            Traveller mode
          </p>
          <h1 style={{ fontSize: 'clamp(34px, 7vw, 72px)', lineHeight: 1, letterSpacing: 0, margin: '12px 0' }}>
            Book stays, trips, taxis, and treks from trusted local providers.
          </h1>
          <p style={{ maxWidth: 620, margin: 0, fontSize: 18, lineHeight: 1.6, color: '#e2e8f0' }}>
            Search verified inventory, compare prices, and reserve with escrow-backed trip support.
          </p>
        </div>
      </div>

      <form
        aria-label="Trip search"
        style={{
          margin: '-74px auto 32px',
          position: 'relative',
          display: 'grid',
          gap: 18,
          background: '#fff',
          border: '1px solid #e2e8f0',
          borderRadius: 8,
          padding: 18,
          boxShadow: '0 18px 42px rgba(15,23,42,0.14)',
        }}
      >
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              style={{
                border: category === 'Stays' ? '1px solid #0f172a' : '1px solid #cbd5e1',
                borderRadius: 999,
                background: category === 'Stays' ? '#0f172a' : '#fff',
                color: category === 'Stays' ? '#fff' : '#0f172a',
                padding: '9px 14px',
                fontWeight: 800,
              }}
            >
              {category}
            </button>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: 12 }}>
          <label style={{ display: 'grid', gap: 6, fontSize: 13, fontWeight: 800 }}>
            Destination
            <input defaultValue="Rishikesh" style={inputStyle} />
          </label>
          <label style={{ display: 'grid', gap: 6, fontSize: 13, fontWeight: 800 }}>
            Check-in
            <input defaultValue="24 Jun" style={inputStyle} />
          </label>
          <label style={{ display: 'grid', gap: 6, fontSize: 13, fontWeight: 800 }}>
            Check-out
            <input defaultValue="27 Jun" style={inputStyle} />
          </label>
          <label style={{ display: 'grid', gap: 6, fontSize: 13, fontWeight: 800 }}>
            Guests
            <input defaultValue="2 adults" style={inputStyle} />
          </label>
          <button
            type="button"
            style={{
              alignSelf: 'end',
              border: 0,
              borderRadius: 8,
              background: '#2563eb',
              color: '#fff',
              padding: '15px 18px',
              fontSize: 16,
              fontWeight: 900,
            }}
          >
            Search
          </button>
        </div>
      </form>

      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 28 }}>
        {trustItems.map((item) => (
          <span key={item} style={{ border: '1px solid #cbd5e1', borderRadius: 999, padding: '8px 12px', background: '#fff', fontSize: 13, fontWeight: 800 }}>
            {item}
          </span>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', gap: 16, marginBottom: 16 }}>
        <div>
          <p style={{ margin: 0, color: '#2563eb', fontSize: 12, fontWeight: 900, textTransform: 'uppercase', letterSpacing: 0 }}>
            Featured inventory
          </p>
          <h2 style={{ margin: '6px 0 0', fontSize: 30, letterSpacing: 0 }}>Bookable stays and experiences</h2>
        </div>
        <Link href="/search" style={{ fontWeight: 900, color: '#2563eb' }}>
          View all
        </Link>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: 18 }}>
        {featuredListings.map((listing) => (
          <article key={listing.id} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 8, overflow: 'hidden' }}>
            <img src={listing.image} alt="" style={{ width: '100%', height: 190, objectFit: 'cover', display: 'block' }} />
            <div style={{ padding: 18 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'start' }}>
                <div>
                  <h3 style={{ margin: 0, fontSize: 20 }}>{listing.title}</h3>
                  <p style={{ margin: '6px 0 0', color: '#64748b', fontWeight: 700 }}>{listing.location}</p>
                </div>
                <strong style={{ background: '#16a34a', color: '#fff', borderRadius: 6, padding: '5px 8px' }}>{listing.rating}</strong>
              </div>
              <p style={{ margin: '14px 0 0', color: '#475569', fontSize: 14, fontWeight: 700 }}>
                {listing.badge} · {listing.reviews}
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
  );
}

const inputStyle = {
  width: '100%',
  border: '1px solid #cbd5e1',
  borderRadius: 8,
  padding: '13px 12px',
  font: 'inherit',
  fontWeight: 700,
  color: '#0f172a',
  background: '#f8fafc',
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
