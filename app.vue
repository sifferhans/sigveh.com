<script lang="ts" setup>
useHead({
  titleTemplate: (title) =>
    title ? `${title} | Sigve Hansen` : "Sigve Hansen",
  link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
  script: [
    {
      async: true,
      src: "https://analytics.eu.umami.is/script.js",
      "data-website-id": "25081cc6-3aeb-4ac5-ad2e-d8bf9bb57062",
    },
  ],
});

useSeoMeta({
  ogImage: "/me.jpg",
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
#__nuxt {
  height: 100%;
}
</style>
