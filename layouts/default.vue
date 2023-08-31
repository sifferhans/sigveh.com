<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <main class="max-w-[65ch] mx-auto flex flex-col h-full px-4 prose">
    <slot />
  </main>
</template>
