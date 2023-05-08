/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['variety.com', 'images.unsplash.com', 'i.ytimg.com', 'yt3.googleusercontent.com', 'yt3.ggpht.com'],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
