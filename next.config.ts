import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "pub-e1ce6cd7aa9640ccb36c096dbb0c14c7.r2.dev" },
    ],
  },
};

export default nextConfig;
