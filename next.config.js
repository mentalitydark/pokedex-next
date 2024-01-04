/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: ''
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/pokemons',
        permanent: true
      }
    ]
  }
}

// eslint-disable-next-line no-undef
module.exports = nextConfig
