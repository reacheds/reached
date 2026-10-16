/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@dispare/types", "@dispare/database"],
};

export default nextConfig;
