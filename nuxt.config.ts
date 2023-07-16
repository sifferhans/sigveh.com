export default defineNuxtConfig({
	devtools: { enabled: true },
	css: ['@unocss/reset/tailwind.css'],
	modules: ['@nuxt/content', '@unocss/nuxt', '@vueuse/nuxt'],
	extends: ['nuxt-seo-kit'],
	runtimeConfig: {
		public: {
			siteUrl: 'https://sigveh.no',
			siteName: 'Sigve Hansen',
			siteDescription: 'I enjoy designing and developing user interfaces.',
			language: 'en-US',
			titleSeparator: '·',
		},
		devToApiKey: 'duUMTF8UUKE6QNdekPV1GZaj'
	},
	app: {
		head: {
			bodyAttrs: {
				class: 'font-sans'
			}
		}
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
	}
})
