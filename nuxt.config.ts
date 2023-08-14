export default defineNuxtConfig({
	devtools: {
		enabled: true,
		timeline: {
			enabled: true
		}
	},
	css: ['@unocss/reset/tailwind.css'],
	modules: ['@nuxt/content', '@unocss/nuxt', '@vueuse/nuxt', '@nuxt/image', 'nuxt-capo'],
	extends: ['nuxt-seo-kit'],
	runtimeConfig: {
		public: {
			siteUrl: 'https://sigveh.com',
			siteName: 'Sigve Hansen',
			siteDescription: 'I enjoy designing and developing user interfaces.',
			language: 'en-US',
			titleSeparator: '·',
		}
	},
	app: {
		head: {
			bodyAttrs: {
				class: 'font-sans'
			}
		},
		pageTransition: false,
		layoutTransition: false
	},
	content: {
		highlight: {
			theme: {
				default: 'min-light',
				dark: 'poimandres',
			}
		},
		markdown: {
			remarkPlugins: ['remark-reading-time'],
		}
	},
	nitro: {
		prerender: {
			crawlLinks: true,
			routes: [
				'/',
			]
		}
	},
	devTo: {
		token: ''
	},

	experimental: {
		typescriptBundlerResolution: true,
		viewTransition: true,
		componentIslands: true,
		payloadExtraction: true,
		typedPages: true,
	},

	sourcemap: false,
})
