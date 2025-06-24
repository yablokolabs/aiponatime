/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // We're handling optimization in the build step
  },
  trailingSlash: true,
  // Disable image optimization in development
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;
