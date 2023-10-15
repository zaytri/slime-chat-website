/** @type {import('next').NextConfig} */

const accountImageHosts = [
  'static-cdn.jtvnw.net', // twitch
  'yt3.googleusercontent.com', // youtube
  'yt3.ggpht.com', // youtube
]

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: accountImageHosts.map(hostname => {
      return {
        protocol: 'https',
        hostname,
      }
    }),
  },
}

module.exports = nextConfig
