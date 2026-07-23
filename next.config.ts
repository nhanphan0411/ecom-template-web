import type { NextConfig } from "next";
console.log("NEXT CONFIG LOADED");
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL(`https://${process.env.R2_PUBLIC_URL}/**`),
    ],
  },
};

export default nextConfig;