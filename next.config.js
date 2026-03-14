/** @type {import('next').NextConfig} */
const nextConfig = {
  // SECTION 12: Performance Requirements
  // LCP < 2.5s, INP < 200ms, CLS < 0.1
  
  reactStrictMode: true,
  
  // Image optimization for WebP format
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 768, 1024, 1280, 1536],
  },
  
  // Separate pages confirmed (Section 13)
  // Each section is its own URL: Home / How It Works / Sample Report / Pricing / About
  
  // Performance optimizations
  swcMinify: true,
  
  // Disable X-Powered-By header
  poweredByHeader: false,
};

module.exports = nextConfig;
