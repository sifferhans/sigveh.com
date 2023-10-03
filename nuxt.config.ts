export default defineNuxtConfig({
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  css: ["@unocss/reset/tailwind.css"],
  modules: [
    "@nuxt/content",
    "@nuxthq/studio",
    "@unocss/nuxt",
    "@vueuse/nuxt",
    "@nuxt/image",
  ],
  extends: ["nuxt-seo-kit"],
  runtimeConfig: {
    public: {
      siteUrl: "https://sigveh.com",
      siteName: "Sigve Hansen",
      siteDescription: "I enjoy designing and developing user interfaces.",
      language: "en-US",
      titleSeparator: "·",
    },
  },
  content: {
    highlight: {
      theme: {
        default: "min-light",
        dark: "poimandres",
      },
    },
    markdown: {
      remarkPlugins: ["remark-reading-time"],
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
  },
  app: {
    pageTransition: {
      enterActiveClass: "transition-all duration-400 ease",
      enterFromClass: "opacity-0",
      leaveActiveClass: "transition-all duration-400 ease",
      leaveToClass: "opacity-0",
    },
  },

  experimental: {
    typescriptBundlerResolution: true,
    componentIslands: true,
    payloadExtraction: true,
    typedPages: true,
  },

  sourcemap: false,
});
