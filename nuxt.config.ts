export default defineNuxtConfig({
  modules: ['@nuxtjs/robots','@nuxt/content','@nuxtjs/i18n','@nuxtjs/supabase','nuxt-schema-org','nuxt-icon',"@nuxt/image-edge","@nuxtjs/tailwindcss"],
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        dir: "ltr"
      },
      {
        code: 'es',
        name: 'Español',
        dir: "ltr"
      },
      {
        code: 'fr',
        name: 'Français',
        dir: "ltr"
      },
      {
        code: 'de',
        name: 'Allemand',
        dir: "ltr"
      },
      {
        code: 'pt',
        name: 'Portugais',
        dir: "ltr"
      },
      {
        code: 'ar',
        name: 'العربية',
        dir: "rtl"
      }
    ],
    defaultLocale: 'ar',
		vueI18n: {
		 legacy: false,
		 locale: 'ar',
		 messages: {
			 en: require('./locales/en.json'),
			 es: require('./locales/es.json'),
			 fr: require('./locales/fr.json'),
			 de: require('./locales/de.json'),
			 pt: require('./locales/pt.json'),
			 ar: require('./locales/ar.json'),
		 }
		}
   },
  schemaOrg: {
    host: 'https://v1.quotesandsayings.net',
  },
  runtimeConfig: {
    apiUrl: process.env.API_URL,
    detaKey: process.env.DETA_KEY,
    supabaseKey: process.env.SUPABASE_KEY,
    supabaseUrl: process.env.SUPABASE_URL
  },
  app: { head: { link: [ {rel: 'icon',href: '/favicon.svg'} ] } },
  robots: {
  UserAgent: '*',
  Allow: '/',
  Sitemap: 'https://www.quotesandsayings.net/sitemap.txt'
  },
  css: [
    '@/assets/css/main.css',
  ],
  
})
