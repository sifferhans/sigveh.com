export default defineNuxtConfig({
	css: ['@sigveh/css', 'assets/index.css'],
	modules: ['@nuxt/content', '@nuxtjs/color-mode'],
	extends: ['nuxt-seo-kit',],
	runtimeConfig: {
		public: {
			siteUrl: 'https://sigveh.no/',
			siteName: 'Sigve Hansen',
			siteDescription: 'I enjoy designing and developing user interfaces.',
			language: 'en-US',
			titleSeparator: '·',
		}
	},
	content: {
		highlight: {
			theme: {
				default: 'github-light',
				dark: 'poimandres',
			}
		}
	}
})
