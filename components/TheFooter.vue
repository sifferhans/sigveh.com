<script setup lang="ts">
const date = useDateFormat(new Date(), 'YYYY')
</script>

<template>
  <footer class="py-4">
    <p class="text-gray-500">{{ date }} © Sigve Hansen</p>
  </footer>
</template>