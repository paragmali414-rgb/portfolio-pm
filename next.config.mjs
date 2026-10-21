/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // ensures static export or local image serving works reliably without external sharp dependency issues
  },
};

export default nextConfig;
