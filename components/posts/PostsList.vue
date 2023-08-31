<script lang="ts" setup>
const posts = await queryContent("posts").find();
</script>

<template>
  <ul class="my-6 md:my-8">
    <li
      v-for="(post, index) in posts"
      :key="post._id"
      :data-index="index"
      :style="`--delay: ${index * 50}ms`"
    >
      <NuxtLink
        :to="post._path"
        class="opacity-50 hover:opacity-100 transition-opacity ease duration-300"
      >
        {{ post.title }}
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped>
[data-index] {
  animation-name: fade-in;
  animation-duration: 2s;
  animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
  animation-delay: var(--delay);
  animation-fill-mode: forwards;
  opacity: 0;
  translate: 0.5em 0;

  display: inline-block;
}

@keyframes fade-in {
  to {
    opacity: 1;
    translate: 0 0;
  }
}
</style>
