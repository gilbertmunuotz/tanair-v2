import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [{
      source: "/api/auth/:path*",
      headers: [
        { key: "Access-Control-Allow-Origin", value: "https://tanair-v2.vercel.app" },
        { key: "Access-Control-Allow-Credentials", value: "true" },
        { key: "Access-Control-Allow-Methods", value: "GET,POST,OPTIONS" },
        { key: "Access-Control-Allow-Headers", value: "Authorization, Content-Type" },
      ],
    }]
  }
};

export default nextConfig;