import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove 'output: export' when using OpenNext Cloudflare adapter
  // OpenNext handles the output configuration
  images: {
    unoptimized: true, // Disable Next.js image optimization for Cloudflare Pages
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
