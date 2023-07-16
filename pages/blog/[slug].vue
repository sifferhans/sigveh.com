<script setup lang="ts">
import TextBalancer from '@/components/text-balancer'
</script>

<template>
  <div>
    <NuxtLink class="flex gap-2 items-center decoration-none my-8 hover:underline focus-visible:underline" to="/blog">
      <svg class="h-4 inline text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
      </svg>
      <span>Back</span>
    </NuxtLink>
    <ContentDoc v-slot="{ doc }">
      <TextBalancer>
        <h1 class="m-0">{{ doc.title }}</h1>
      </TextBalancer>
      <p class="text-gray-500">{{ doc.readingTime.text }}</p>
      <img v-if="doc.image" v-bind="doc.image" class="my-8 rounded-lg" />
      <ContentRenderer :value="doc" />
    </ContentDoc>
  </div>
</template>

<style>
:where(h1, h2, h3, h4) a {
  text-decoration: none !important;
}
</style>
