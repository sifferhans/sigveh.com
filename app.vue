<script lang="ts" setup>
useSchemaOrg([
  definePerson({
    name: 'Sigve Hansen',
    image: '/me.jpg',
    sameAs: ['https://github.com/sifferhans'],
  }),
  defineWebSite({
    name: 'Sigve Hansen',
  }),
  defineWebPage(),
])

useHead({
  link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
})

defineOgImageScreenshot()
</script>

<template>
  <SeoKit />
  <OgImageScreenshot />

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
#__nuxt {
  height: 100%;
}
</style>
