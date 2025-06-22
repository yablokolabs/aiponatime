// package/next.config.js
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repo   = 'aiponatime';

const nextConfig = {
  output: 'export',
  basePath:   isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  images: { unoptimized: true },
  trailingSlash: true,
};

module.exports = nextConfig;
