import tailwindTypography from '@tailwindcss/typography'

export default defineNuxtConfig({
	modules: [
		'@nuxt/content',
		'@nuxtjs/tailwindcss'
	],
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
	tailwindcss: {
		viewer: false,
		config: {
			plugins: [tailwindTypography],
			content: [
				'content/**/**.md'
			],
		}
	}
})
