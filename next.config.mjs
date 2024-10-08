/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "afterparty.fm",
      },
    ],
  },
};

export default nextConfig;
