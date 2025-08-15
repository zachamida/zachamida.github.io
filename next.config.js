/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure for static export to GitHub Pages
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
    domains: ['zachamida.github.io'], // Allow images from your domain
  },
  // No base path needed for GitHub Pages with custom domain or root deployment
  assetPrefix: '',
  basePath: '',
};

module.exports = nextConfig;
