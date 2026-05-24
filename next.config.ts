import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/demo',
        destination: 'https://motherlodecmi.com/demo-legacy',
      },
    ];
  },
};

export default nextConfig;
