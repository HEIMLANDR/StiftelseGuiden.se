/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output as a static site for Netlify
  output: 'export',
  
  // Disable image optimization since Netlify handles this
  images: {
    unoptimized: true,
  },
  
  // Trailing slash for better compatibility with Netlify
  trailingSlash: true,
  
  // Enable React strict mode for better development
  reactStrictMode: true,
};

module.exports = nextConfig;