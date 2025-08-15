/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure for static export and GitHub Pages
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
  // Configure base path for GitHub Pages (if needed)
  // basePath: '/zachamida.github.io',
  // assetPrefix: '/zachamida.github.io/',
};

module.exports = nextConfig;
