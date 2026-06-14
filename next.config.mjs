// SEO FIX: Expanded next.config.mjs with image optimization, compression, and security/caching headers
/** @type {import('next').NextConfig} */
const nextConfig = {
  // SEO FIX: compress: true enables gzip compression for all responses
  compress: true,

  images: {
    // SEO FIX: AVIF + WebP output formats improve Core Web Vitals via smaller image payloads
    formats: ["image/avif", "image/webp"],
  },

  async redirects() {
    return [
      {
        // Redirect /equipment to /services — /equipment returns 404 but may be linked externally
        source: "/equipment",
        destination: "/services",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        // SEO FIX: Long-lived cache for all Next.js static assets (hashed filenames make this safe)
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // SEO FIX: Moderate cache for public static files (images, fonts, etc.)
        source: "/(.*)\\.(webp|avif|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|otf)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        // SEO FIX: Security headers applied to all routes — improves security score on audits
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
