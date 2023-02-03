// https://nuxt.com/docs/api/configuration/nuxt-config
// yarn build  .nuxt/dist yarn install
if (
  process.env.LD_LIBRARY_PATH == null ||
  !process.env.LD_LIBRARY_PATH.includes(
    `${process.env.PWD}/node_modules/canvas/build/Release:`,
  )
) {
  process.env.LD_LIBRARY_PATH = `${
    process.env.PWD
  }/node_modules/canvas/build/Release:${process.env.LD_LIBRARY_PATH || ''}`;
}
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
  server:[
		"/<rootDir>/.nuxt",
		"/<rootDir>/public",
		"/<rootDir>",
		"/<rootDir>",
		"/<rootDir>",
		"/<rootDir>/node_modules",
		"/vercel/path0/packages/schema/node_modules"
	],
  css: [
    '@/assets/css/main.css',
  ],
})
