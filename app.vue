<script lang="ts" setup>
useHead({
  titleTemplate: (title) =>
    title ? `${title} | Sigve Hansen` : "Sigve Hansen",
  link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
});

useSeoMeta({
  ogImage: "/me.jpg",
});
</script>

<template>
  <SeoKit />

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
#__nuxt {
  height: 100%;
}
</style>
