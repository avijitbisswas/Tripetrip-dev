import Link from 'next/link';
import type { ReactNode } from 'react';

const navItems = [
  { href: '/', label: 'Stays' },
  { href: '/trip-planner', label: 'Trips' },
  { href: '/search', label: 'Taxis' },
  { href: '/discover', label: 'Treks' },
  { href: '/wishlist', label: 'Wishlist' },
];

const utilityItems = [
  { href: '/provider/dashboard', label: 'List your property' },
  { href: '/admin', label: 'Admin' },
];

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <main style={{ minHeight: '100vh', background: '#f8fafc', color: '#0f172a' }}>
      <header
        style={{
          borderBottom: '1px solid #e2e8f0',
          background: 'rgba(255,255,255,0.9)',
          position: 'sticky',
          top: 0,
          zIndex: 10,
        }}
      >
        <div
          style={{
            maxWidth: 1180,
            margin: '0 auto',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
          }}
        >
          <Link href="/" style={{ fontWeight: 800, letterSpacing: '-0.03em' }}>
            TripETrip
          </Link>
          <nav style={{ display: 'flex', gap: 14, flexWrap: 'wrap', fontSize: 14, fontWeight: 800 }}>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <nav style={{ display: 'flex', gap: 10, flexWrap: 'wrap', fontSize: 12, fontWeight: 700, color: '#64748b' }}>
            {utilityItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      {children}
    </main>
  );
}
