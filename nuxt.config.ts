// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  

  ssr: true,
  
  css: ['@/assets/css/inter.css'],
  
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    '@nuxt/image',
    'nuxt-schema-org',
    'nuxt-gtag',
    '@vueuse/motion/nuxt',
    '@formkit/auto-animate/nuxt',
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@formkit/nuxt',
    '@nuxtjs/robots',
    '@nuxthq/studio',
  ],

  content: {
    documentDriven: true
  },

  i18n: {
    locales: ['en', 'ru'],
    baseUrl: 'https://itext.agency',
    defaultLocale: 'en',
    strategy: 'prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true,
    },
  },

  formkit: {
    autoImport: true,
  },
   

  gtag: {
    id: 'G-MHN43BWPRX' 
  },

  nitro: {
    prerender: {
      routes: ['/sitemap.xml', '/rss.xml']
    }
  },
})
