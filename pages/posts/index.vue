<script setup lang="ts">
import { QueryBuilderParams } from "#content";

definePageMeta({
  title: "Posts",
  pageTitle: "My humble writings",
  description:
    "This is where I put my thoughts and my writings, whenever I get those.",
});

const query: QueryBuilderParams = {
  path: "/",
  sort: [{ date: -1 }],
  only: ["title", "description", "categories", "_path", "draft", "image"],
};
</script>

<template>
  <div class="grid gap-2">
    <ContentList :query="query" v-slot="{ list }">
      <BlogCard v-for="post in list" :key="post._path" :post="post" />
    </ContentList>
  </div>
</template>
