/** @type {import('next').NextConfig} */

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  output: 'export',
  // basePath: '/portafolio',
  // assetPrefix: '/portafolio/',
  images: { unoptimized: true }
};

export default nextConfig;
