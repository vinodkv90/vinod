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
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_IMAGES_ENDPOINT ?? "mindful-wealth-26c18ca11f.media.strapiapp.com",
      },
    ]
  }
};

export default nextConfig;
