export default defineNuxtConfig({
	css: ['@sigveh/css'],
	modules: ['@nuxt/content'],
	extends: ['nuxt-seo-kit',],
	runtimeConfig: {
		public: {
			siteUrl: 'https://sigveh.no/',
			siteName: 'Sigve Hansen',
			siteDescription: 'I enjoy designing and developing user interfaces.',
			language: 'en-US',
			titleSeparator: '·',
		}
	}
})
