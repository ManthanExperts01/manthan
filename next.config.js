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
};
