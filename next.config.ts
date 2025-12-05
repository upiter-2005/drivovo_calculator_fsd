import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 
  images: {
    //domains: ['drivovo.com'],
    remotePatterns: [
      {
      protocol: "https",
      hostname: "drivovo.eu",
      pathname: "/**",
    },
    {
      protocol: "http",
      hostname: "drivovo.eu",
      pathname: "/**",
    },
    ],
  },
};

export default nextConfig;
