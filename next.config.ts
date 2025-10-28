import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel deployment için optimize edilmiş ayarlar
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  // Trailing slash yok
  trailingSlash: false,
};

export default nextConfig;
