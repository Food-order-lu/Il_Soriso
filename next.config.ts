import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Il_Soriso',
  assetPrefix: '/Il_Soriso/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
