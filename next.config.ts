import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: '',
  // Disable server-side features since GitHub Pages is static
  trailingSlash: true,
  distDir: 'out'
}

export default nextConfig
