import { addVitePlugin, defineNuxtModule } from "nuxt/kit";

export default defineNuxtModule({
  meta: {
    name: "Remove HTML comments",
  },
  setup(options, nuxt) {
    addVitePlugin({
      name: "remove-html-comments",
      enforce: "pre",
      transform(code, id) {
        if (!id.includes(".vue")) return;

        return {
          code: code.replace(/(\<|<)!--\s*.*?\s*--(\>|>)/gm, ""),
        };
      },
    });
  },
});
