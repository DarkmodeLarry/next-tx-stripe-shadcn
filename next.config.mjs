import { withContentlayer } from 'next-contentlayer'

import './env.mjs'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    domains: ['avatars.githubusercontent.com', 'lh3.googleusercontent.com', 'files.stripe.com']
  },
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['@prisma/client']
  }
}

export default withContentlayer(nextConfig)
