import type { NextConfig } from "next";

const EC2_DEMO_HOST = process.env.MOTHERLODE_DEMO_HOST || "http://44.222.154.14:8003";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Demo: gated by middleware, then proxied to FastAPI on EC2.
      // /demo/login is excluded by the middleware matcher.
      {
        source: '/demo',
        destination: `${EC2_DEMO_HOST}/`,
      },
      // The FastAPI backend's /api/* — gated by middleware (same session cookie).
      {
        source: '/api/chat',
        destination: `${EC2_DEMO_HOST}/api/chat`,
      },
      {
        source: '/api/health',
        destination: `${EC2_DEMO_HOST}/api/health`,
      },
      {
        source: '/api/mines',
        destination: `${EC2_DEMO_HOST}/api/mines`,
      },
      {
        source: '/api/scan',
        destination: `${EC2_DEMO_HOST}/api/scan`,
      },
    ];
  },
};

export default nextConfig;
