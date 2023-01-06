<script setup lang="ts">
const route = useRoute()
const title = computed(() => route.meta.pageTitle || route.meta.title)
</script>

<template>
  <div class="container">
    <TheHeader />
    <header v-if="title" class="page-header">
      <h1>{{ title }}</h1>
      <p>{{ route.meta.description }}</p>
    </header>
    <main>
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<style scoped>
.container {
  max-width: 70ch;
  width: 100%;
  margin-inline: auto;
  padding-inline: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

.page-header {
  margin-block: 2rem;
}

.page-header h1 {
  margin: 0;
}

.page-header p {
  margin-block: 1rem;
}
</style>
