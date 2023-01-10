<script setup lang="ts">
type Post = {
  title: string
  description?: string
  categories?: string[]
  date: string
  draft: boolean
  _path: string
}

defineProps<{
  post: Post
}>()
</script>

<template>
  <NuxtLink :to="post._path" class="blog-card">
    <div class="header">
      <h3>{{ post.title }}</h3>
      <span class="draft" v-if="post.draft">(draft)</span>
    </div>
    <p>{{ post.description }}</p>
    <div v-if="post.categories?.length" class="categories">
      <Badge v-for="category in post.categories" :key="category">
        {{ category }}
      </Badge>
    </div>
  </NuxtLink>
</template>

<style scoped>
.blog-card {
  margin-block: 1rem;
  text-decoration: none;
}

.blog-card:is(:hover, :focus-visible) h3 {
  text-decoration: underline;
}

.header {
  display: flex;
  gap: 1rem;
  /* justify-content: space-between; */
}

.draft {
  opacity: 0.5;
}

h3,
p {
  margin-block: 0;
}

h3 {
  margin-block-end: 0.2rem;
}

.categories {
  margin-block-start: 0.5rem;
  display: flex;
  gap: 0.5rem;
}
</style>
