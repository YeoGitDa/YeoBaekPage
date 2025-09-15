import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co', pathname: '/**' },
      { protocol: 'https', hostname: 'picsum.photos' },
    ],
    domains: ["images.unsplash.com"],
  },
  experimental: {
    // @ts-expect-error: allowedDevOrigins is not yet in NextConfig types
    allowedDevOrigins: [
      "http://localhost:3000",
      "http://127.0.0.1:3000",
      "https://3000-firebase-studio-1754493943612.cluster-6dx7corvpngoivimwvvljgokdw.cloudworkstations.dev",
    ],
  },
};

export default nextConfig;
