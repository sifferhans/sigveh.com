import {
  defineConfig,
  presetUno,
  presetWind,
  presetTypography,
  presetWebFonts,
} from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetWind(),
    presetTypography(),
    presetWebFonts({
      provider: "bunny",
      fonts: {
        sans: "DM Sans",
        serif: "Cormorant Garamond",
      },
    }),
  ],
  preflights: [
    {
      getCSS: () => `
				body,
				html,
				#__nuxt {
					height: 100%;
				}
			`,
    },
    {
      getCSS: ({ theme }) => `
				pre {
					background-color: ${theme.colors.gray[100]} !important;
				}
			`,
    },
  ],
});
