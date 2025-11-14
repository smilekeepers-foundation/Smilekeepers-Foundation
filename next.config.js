/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,

  // REQUIRED for GitHub Pages static export
  images: {
    unoptimized: true,
  },

  // REQUIRED for next export (static HTML)
  output: "export",
};

module.exports = nextConfig;
