const withImages = require('next-images');
// eslint-disable-next-line no-unused-vars
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = withImages({
  TrailingSlash: true,
  images: {
    disableStaticImages: true
  },
  exportPathMap() {
    return {
      '/': { page: '/' },
      '/blank-page': { page: '/blank-page' },
    };
  },
  publicRuntimeConfig: {
    localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string'
      ? process.env.LOCALE_SUBPATHS
      : 'none',
  },
});
