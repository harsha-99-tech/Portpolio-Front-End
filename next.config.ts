import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.icons8.com",
      },
    ],
  },
  // basePath will be set automatically by GitHub Pages workflow if needed
  // For local builds, you can set NEXT_PUBLIC_BASE_PATH environment variable
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  trailingSlash: false,
};

export default nextConfig;
