export default {
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxt/image', '@nuxtjs/google-fonts'],
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
}
