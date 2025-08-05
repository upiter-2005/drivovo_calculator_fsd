import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  images: {
    //domains: ['drivovo.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname:  'drivovo.ua',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
