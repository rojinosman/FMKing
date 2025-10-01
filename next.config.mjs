// next.config.mjs
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },

  // Make assets/links work at https://rojinosman.github.io/FMKing/
  basePath:   isProd ? '/FMKing'  : undefined,
  assetPrefix:isProd ? '/FMKing/' : undefined,

  // optional but helpful for static hosting
  // trailingSlash: true,

  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
