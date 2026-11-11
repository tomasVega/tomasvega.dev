/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  // Cloudflare serves the static export; Next handles the root redirect in development.
  ...(process.env.NODE_ENV === 'development'
    ? {
        async redirects() {
          return [{ source: '/', destination: '/es', permanent: true }];
        },
      }
    : { output: 'export' }),
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
