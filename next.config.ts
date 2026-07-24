import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

initOpenNextCloudflareForDev();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-e1ce6cd7aa9640ccb36c096dbb0c14c7.r2.dev",
      },
    ],
  },
};

export default nextConfig;