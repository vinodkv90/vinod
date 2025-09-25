import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: process.env.NEXT_PUBLIC_IMAGES_ENDPOINT ?? "localhost:1337",
        port: '1337',
        pathname: '/uploads/**'
      },
    ]
  }
};

export default nextConfig;
