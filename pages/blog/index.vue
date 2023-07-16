<script setup lang="ts">
import { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

definePageMeta({
  title: 'Blog',
  pageTitle: 'My humble writings',
  description:
    'This is where I put my thoughts and my writings, whenever I get those.',
})

const query: QueryBuilderParams = {
  path: '/',
  sort: [{ date: -1 }],
  only: ['title', 'description', 'categories', '_path', 'draft'],
}
</script>

<template>
  <ContentList :query="query" v-slot="{ list }">
    <div class="grid gap-2">
      <BlogCard v-for="post in list" :key="post._path" :post="post" />
    </div>
  </ContentList>
</template>