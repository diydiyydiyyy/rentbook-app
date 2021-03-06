module.exports = {
  images: {
    domains: ['penerbitharu.com'],
  },

  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: '/login',
        destination: '/auth/login'
      },
      {
        source: '/register',
        destination: '/auth/register'
      },
    ]
  }
}
