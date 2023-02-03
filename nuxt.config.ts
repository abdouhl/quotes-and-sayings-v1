export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n','@nuxtjs/supabase','nuxt-schema-org','nuxt-icon',"@nuxt/image-edge","@nuxtjs/tailwindcss"],
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English'
      },
      {
        code: 'es',
        name: 'Español'
      },
      {
        code: 'fr',
        name: 'Français'
      },
      {
        code: 'de',
        name: 'Allemand'
      },
      {
        code: 'pt',
        name: 'Portugais'
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
