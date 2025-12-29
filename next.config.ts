import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    unoptimized: true, // Disable Image Optimization API for static exports
  },
  // Add any other necessary configurations here
};

export default nextConfig;
