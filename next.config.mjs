/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // approutingを有効にする
    appDir: true,
    // routingを型安全にする
    typedRoutes: true,
  },
};

export default nextConfig;
