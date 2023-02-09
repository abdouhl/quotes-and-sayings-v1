export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n','@nuxtjs/supabase','nuxt-schema-org','nuxt-icon',"@nuxt/image-edge","@nuxtjs/tailwindcss"],
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
    defaultLocale: 'en',
		vueI18n: {
		 legacy: false,
		 locale: 'en',
		 messages: {
			 en: {
				 title: 'Quotes And Sayings'
			 },
			 es: {
				 title: 'Citas y refranes'
			 },
			 fr: {
				 title: 'Citations et énonciations'
			 },
			 de: {
				 title: 'Zitate und Sprüche'
			 },
			 pt: {
				 title: 'Citações E Provérbios'
			 },
			 ar: {
				 title: 'أقوال و اقتباسات'
			 }
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
    
  },
  css: [
    '@/assets/css/main.css',
  ],
})
