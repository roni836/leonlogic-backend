export default [
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      origin: ['https://leonlogic-f9c5.vercel.app'],
      credentials: true,
    },
  },
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
