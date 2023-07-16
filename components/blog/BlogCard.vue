<script setup lang="ts">
type Post = {
  title: string
  description?: string
  categories?: string[]
  date: string
  draft: boolean
  image: { src: string }
  _path: string
}

defineProps<{
  post: Post
}>()
</script>

<template>
  <NuxtLink :to="post._path" class="my-4 decoration-none grid gap-4 sm:grid-cols-3">
    <img :src="post.image.src" alt="" class="sm:col-span-1 rounded-md" style="view-transition-name: post-image">
    <div class="sm:col-span-2">
      <div class="flex gap-4">
        <h3 class="my-0" style="view-transition-name: post-title">{{ post.title }}</h3>
        <span class="text-gray-500" v-if="post.draft">(draft)</span>
      </div>
      <p class="my-2 font-400">{{ post.description }}</p>
      <div v-if="post.categories?.length" class="mt-2 flex gap-2">
        <Badge v-for="category in post.categories" :key="category">
          {{ category }}
        </Badge>
      </div>
    </div>
  </NuxtLink>
</template>