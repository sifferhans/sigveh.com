<script setup lang="ts">
type Post = {
  title: string
  description?: string
  categories?: string[]
  date: string
  _path: string
  _draft: boolean
}

defineProps<{
  post: Post
}>()
</script>

<template>
  <NuxtLink :to="post._path" class="blog-card">
    <h3>
      {{ post.title }}
      <Badge v-if="post._draft">draft</Badge>
    </h3>
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
