export default {
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxt/image', '@nuxtjs/google-fonts', 'nuxt-icon'],
  css: ['@/assets/css/tailwind.css'],
  pinia: {
    autoImports: ['defineStore', ['defineStore', 'definePiniaStore']],
  },
  googleFonts: {
    families: {
      Roboto: true,
      Inter: [400, 700],
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100],
      },
      'Crimson Pro': {
        wght: '200..900',
        ital: '200..700',
      },
      'Fira Sans': {
        wght: '200..900',
        ital: '200..700',
      },
      Poppins: {
        wght: '200..900',
        ital: '200..700',
      },
    },
  },
  alias: {
    assets: '@/assets',
  },
  image: {
    inject: true,
    dir: ['~/assets/images', '~/assets/icons', '~/assets/logos'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536,
    },
  },
  // Remove the unrecognized property
  // injectPosition: 'first',
  viewer: true,
  configPath: 'tailwind.config',
  exposeConfig: false,
  exposeLevel: 2,
  config: {},
  runtimeConfig: {
    public: {
      navLinks: [
        'Home',
        'Courses',
        'Code Playground',
        'Top Learners',
        'Blog',
        'FAQ',
        'Contact',
        'Terms of Use',
        'Privacy Policy',
      ],
    },
  },
  axios: {
    proxy: true,
  },
  proxy: {
    '/users': 'https://127.0.0.1:8000',
    '/linkedin': 'https://nubela.co/proxycurl/api/v2/',
  },
  routeRules: {
    '/**': {
      // enable CORS
      cors: true, // if enabled, also needs cors-preflight-request.ts Nitro middleware to answer CORS preflight requests
      headers: {
        // CORS headers
        'Access-Control-Allow-Origin': '*', // 'http://example:6006', has to be set to the requesting domain that you want to send the credentials back to
        'Access-Control-Allow-Methods': '*', // 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS'
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Headers': '*', // 'Origin, Content-Type, Accept, Authorization, X-Requested-With'
        'Access-Control-Expose-Headers': '*',
        // 'Access-Control-Max-Age': '7200', // 7200 = caching 2 hours (Chromium default), https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Max-Age#directives
      },
    },
  },
}
