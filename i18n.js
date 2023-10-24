const NextI18Next = require('next-i18next').default;

module.exports = new NextI18Next({
  defaultLanguage: 'ind',
  otherLanguages: ['eng'],
  fallbackLng: 'eng',
  initImmediate: false,
  localePath: 'public/locales',
  react: {
    useSuspense: false,
  },
  localeSubpaths: {
    eng: 'en',
    ind: 'id',
  },
});
