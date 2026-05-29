import type { NextConfig } from 'next';

const output = process.env.NEXT_OUTPUT === 'export' ? 'export' : undefined;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output,
  images: {
    unoptimized: output === 'export',
  },
};

export default nextConfig;
