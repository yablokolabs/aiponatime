/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  generateBuildId: async () => 'build',
  experimental: {
    // Enable any experimental features here if needed
  },
};

module.exports = nextConfig;
