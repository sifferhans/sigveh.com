<script setup lang="ts">
const routes = [
  { name: 'Blog', path: '/blog' },
  { name: 'Projects', path: '/projects' },
]
</script>

<template>
  <header class="py-4 flex justify-between items-center">
    <NuxtLink to="/">
      <strong>sigveh</strong>
    </NuxtLink>
    <nav>
      <ul class="flex gap-8 items-center">
        <li class="list-none" v-for="route in routes" :key="route.path">
          <NuxtLink :to="route.path">{{ route.name }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>