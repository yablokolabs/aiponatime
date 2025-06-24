/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // We handle optimization in the build step
  },
  trailingSlash: true,
  // Ensure static export works with middleware
  skipTrailingSlashRedirect: true,
  // Disable image optimization in development
  experimental: {
    // Required for static exports with middleware
    appDir: true,
    // Enable middleware
    middleware: true,
  },
  // Generate a static export
  generateBuildId: async () => 'build',
};

// For static export
const isProd = process.env.NODE_ENV === 'production';
if (isProd) {
  nextConfig.output = 'export';
}

module.exports = nextConfig;
