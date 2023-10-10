export default defineNuxtConfig({
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  css: ["@unocss/reset/tailwind.css"],
  modules: [
    "@nuxtseo/module",
    "@nuxt/content",
    "@nuxthq/studio",
    "@unocss/nuxt",
    "@vueuse/nuxt",
    "@nuxt/image",
  ],
  site: {
    url: "https://sigveh.com",
    name: "Sigve Hansen",
    description: "I enjoy designing and developing user interfaces.",
    currentLocale: "en-US",
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
