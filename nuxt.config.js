export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  loading: {
    color: 'blue',
    height: '5px'
  },
  env: {
    strapiBaseUri: process.env.API_URL || "http://localhost:1337"
  },
  
  head: {
    title: 'Welcome to STEM Olympiad homepage by US Embassy & Robolab',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'STEAM Olympiad is olympiad organized by US Embassy & Robolab' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/tidy.css','aos/dist/aos.css','slick-carousel/slick/slick.css',
    'slick-carousel/slick/slick-theme.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
   { src:'@/plugins/aos.js', mode: 'client'},
   { src: '~plugins/notify.client', mode: 'client' },
   { src: '~plugins/notify.server', mode: 'server' },
   { src: '~/plugins/slick', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/markdownit',
    '@nuxtjs/strapi',
    '@nuxtjs/axios',

  ],
  strapi: {
    entities: ['Questions','Students','Results']
  },
  axios: {
    // extra config e.g
     baseURL:  process.env.API_URL || "http://localhost:1337"
  },
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    use: [
      'markdown-it-div',
      'markdown-it-attrs'
    ]
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
