/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@reached/types", "@reached/database"],
};

export default nextConfig;
