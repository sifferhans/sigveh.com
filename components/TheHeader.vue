<script setup lang="ts">
const routes = ref([
  { name: 'Blog', path: '/blog' },
  { name: 'Projects', path: '/projects' },
])
</script>

<template>
  <header>
    <nav>
      <ul>
        <li v-for="route in routes" :key="route.path">
          <NuxtLink :to="route.path">{{ route.name }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
