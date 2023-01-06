<script setup lang="ts">
import { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

definePageMeta({
  title: 'Blog',
  pageTitle: 'My humble writings',
  description:
    'This is where I put my thoughts and my writings, whenever I get those.',
})

const query: QueryBuilderParams = { path: '/', sort: [{ date: -1 }] }
</script>

<template>
  <ContentList :query="query" v-slot="{ list }">
    <div class="blog-posts">
      <BlogCard v-for="post in list" :key="post._path" :post="post" />
    </div>
  </ContentList>
</template>

<style scoped>
.blog-posts {
  display: grid;
  gap: 0.5rem;
}
</style>
