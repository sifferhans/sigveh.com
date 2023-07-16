<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="max-w-[65ch] mx-auto flex flex-col h-full px-4">
    <TheHeader />
    <main class="prose flex-1">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>