/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/inside-wave-chronicles',
  assetPrefix: '/inside-wave-chronicles/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
