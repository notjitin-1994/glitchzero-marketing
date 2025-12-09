import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Modern image format support - AVIF first (better compression), WebP fallback
    formats: ['image/avif', 'image/webp'],

    // Optimized device sizes for responsive images
    // Covers mobile (640-828), tablet (1080), desktop (1200-1920), and 4K (2048-3840)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],

    // Icon and thumbnail sizes for small images
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Cache optimized images for 1 year (31536000 seconds)
    // Reduces bandwidth and improves repeat visit performance
    minimumCacheTTL: 31536000,

    // Allowed quality values - restrict to prevent oversized images
    // 75 is optimal balance between quality and file size
    // 90 for high-quality images where needed
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
