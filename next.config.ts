import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL(`https://${process.env.R2_PUBLIC_HOSTNAME}/**`),
    ],
  },
};

export default nextConfig;