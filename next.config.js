const path = require('path');
const { SITE } = require('./src/config.js');

module.exports = {
  reactStrictMode: true,
  output: 'standalone',
  // output: 'export',
  trailingSlash: SITE.trailingSlash,
  basePath: SITE.basePathname !== '/' ? SITE.basePathname : '',
  swcMinify: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/images/manthan-exprerts/blogs/:path*',
        destination: '/api/images/:path*',
      },
    ];
  },
};
