import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    //domains: ['drivovo.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname:  'drivovo.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
