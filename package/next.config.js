/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  generateBuildId: async () => "build",
  experimental: {
    // Enable any experimental features here if needed
  },
  // Optional: Add basePath if your site is served from a subdirectory
  // basePath: '/your-base-path',
};

module.exports = nextConfig;
