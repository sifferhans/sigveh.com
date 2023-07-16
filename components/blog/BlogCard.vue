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
  <NuxtLink :to="post._path" class="my-4 decoration-none">
    <div class="flex gap-4">
      <h3 class="my-0">{{ post.title }}</h3>
      <span class="text-gray-500" v-if="post.draft">(draft)</span>
    </div>
    <p class="my-2 font-400">{{ post.description }}</p>
    <div v-if="post.categories?.length" class="mt-2 flex gap-2">
      <Badge v-for="category in post.categories" :key="category">
        {{ category }}
      </Badge>
    </div>
  </NuxtLink>
</template>