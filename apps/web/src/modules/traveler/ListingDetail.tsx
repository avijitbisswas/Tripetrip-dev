import Link from 'next/link';

const gallery = [
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=900&q=80',
];

const inclusions = ['Breakfast included', 'Private riverside room', 'Verified host', '24x7 TripETrip support'];

export function ListingDetail() {
  return (
    <section style={{ maxWidth: 1180, margin: '0 auto', padding: '32px 20px 72px' }}>
      <div style={{ display: 'grid', gap: 10, marginBottom: 18 }}>
        <Link href="/" style={{ color: '#2563eb', fontWeight: 900 }}>
          Back to search
        </Link>
        <p style={{ margin: 0, color: '#64748b', fontWeight: 800 }}>Rishikesh, Uttarakhand · Homestay · Verified</p>
        <h1 style={{ margin: 0, fontSize: 'clamp(32px, 6vw, 58px)', lineHeight: 1, letterSpacing: 0 }}>
          Riverside Himalayan Homestay
        </h1>
        <p style={{ margin: 0, color: '#475569', fontSize: 17, lineHeight: 1.6 }}>
          A verified family-run stay beside the river with guided local experiences, certified taxi pickup, and escrow-backed booking support.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.4fr) minmax(260px, 0.6fr)', gap: 12 }}>
        <img src={gallery[0]} alt="" style={{ width: '100%', height: 390, objectFit: 'cover', borderRadius: 8 }} />
        <div style={{ display: 'grid', gap: 12 }}>
          {gallery.slice(1).map((image) => (
            <img key={image} src={image} alt="" style={{ width: '100%', height: 189, objectFit: 'cover', borderRadius: 8 }} />
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 340px', gap: 24, marginTop: 28, alignItems: 'start' }}>
        <div style={{ display: 'grid', gap: 18 }}>
          <div style={panelStyle}>
            <h2 style={sectionHeadingStyle}>Why travellers book this</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: 12 }}>
              {inclusions.map((item) => (
                <div key={item} style={{ border: '1px solid #e2e8f0', borderRadius: 8, padding: 14, fontWeight: 800 }}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div style={panelStyle}>
            <h2 style={sectionHeadingStyle}>Booking flow</h2>
            <ol style={{ margin: 0, paddingLeft: 22, display: 'grid', gap: 10, color: '#334155', lineHeight: 1.55 }}>
              <li>Reserve dates and guests with an inventory lock.</li>
              <li>Pay securely into escrow when checkout is enabled.</li>
              <li>Provider confirms arrival details and taxi pickup.</li>
              <li>Check in, complete the stay, and release settlement.</li>
            </ol>
          </div>
        </div>

        <aside style={{ ...panelStyle, position: 'sticky', top: 86 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: 12 }}>
            <div>
              <strong style={{ fontSize: 28 }}>Rs. 3,200</strong>
              <span style={{ color: '#64748b' }}> / night</span>
            </div>
            <strong style={{ background: '#16a34a', color: '#fff', borderRadius: 6, padding: '6px 8px' }}>4.8</strong>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 18 }}>
            <div style={miniFieldStyle}>
              <span>Check-in</span>
              <strong>24 Jun</strong>
            </div>
            <div style={miniFieldStyle}>
              <span>Check-out</span>
              <strong>27 Jun</strong>
            </div>
            <div style={{ ...miniFieldStyle, gridColumn: '1 / -1' }}>
              <span>Guests</span>
              <strong>2 adults</strong>
            </div>
          </div>

          <p style={{ margin: '16px 0', color: '#475569', fontWeight: 800 }}>Escrow protected · Free cancellation before 24 Jun</p>

          <Link href="/bookings/booking_demo_001" style={reserveStyle}>
            Reserve now
          </Link>

          <p style={{ margin: '14px 0 0', color: '#64748b', fontSize: 13, lineHeight: 1.5 }}>
            You will not be charged in this demo flow. Real Razorpay checkout is planned in the production payment milestone.
          </p>
        </aside>
      </div>
    </section>
  );
}

const panelStyle = {
  background: '#fff',
  border: '1px solid #e2e8f0',
  borderRadius: 8,
  padding: 20,
};

const sectionHeadingStyle = {
  margin: '0 0 14px',
  fontSize: 22,
};

const miniFieldStyle = {
  display: 'grid',
  gap: 4,
  border: '1px solid #cbd5e1',
  borderRadius: 8,
  padding: 12,
};

const reserveStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 48,
  borderRadius: 8,
  background: '#2563eb',
  color: '#fff',
  fontWeight: 900,
};
