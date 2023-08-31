<script setup lang="ts">
type Post = {
  title: string;
  description?: string;
  categories?: string[];
  date: string;
  draft: boolean;
  image: { src: string };
  _path: string;
};

const props = defineProps<{
  post: Post;
}>();
</script>

<template>
  <NuxtLink
    :to="post._path"
    class="my-4 decoration-none grid gap-4 sm:grid-cols-3"
  >
    <div class="sm:col-span-2">
      <div class="flex gap-4">
        <h3 class="font-bold text-xl" style="view-transition-name: heading">
          {{ post.title }}
        </h3>
        <span class="text-gray-500" v-if="post.draft">(draft)</span>
      </div>
      <p class="my-2 font-400">{{ post.description }}</p>
      <div v-if="post.categories?.length" class="mt-2 flex gap-4 text-gray-400">
        <small v-for="category in post.categories" :key="category">
          {{ category }}
        </small>
      </div>
    </div>
  </NuxtLink>
</template>
