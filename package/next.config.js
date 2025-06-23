// package/next.config.js
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repo   = 'aiponatime';

const nextConfig = {
  output: 'export',
  basePath:   isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: isProd ? `/${repo}` : '' },
  trailingSlash: true,
};

module.exports = nextConfig;
