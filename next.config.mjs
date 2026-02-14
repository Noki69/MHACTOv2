/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/MHACTO-PROJECT',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
