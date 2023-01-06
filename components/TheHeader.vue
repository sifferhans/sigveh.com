<script setup lang="ts">
const routes = ref([
  { name: 'Blog', path: '/blog' },
  { name: 'Projects', path: '/projects' },
])
</script>

<template>
  <header>
    <strong>
      <NuxtLink to="/">sigveh.no</NuxtLink>
    </strong>
    <nav>
      <ul>
        <li v-for="route in routes" :key="route.path">
          <NuxtLink :to="route.path">{{ route.name }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  padding-block: 1rem;
  display: flex;
  justify-content: space-between;
}

ul {
  display: flex;
  gap: 2rem;
  padding: 0;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}
</style>
