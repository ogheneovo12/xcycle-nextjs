module.exports = {
    images: {
      domains: ['source.unsplash.com'],
    },
    async rewrites() {
        return [
          {
            source: '/api/proxy/:path*',
            destination: 'http://xycle.herokuapp.com/:path*' // Proxy to Backend
          }
        ]
      }
  }