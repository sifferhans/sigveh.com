<script setup lang="ts">
import TextBalabncer from '@/components/text-balancer'
</script>

<template>
  <div>
    <NuxtLink class="back" to="/blog">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
        />
      </svg>
      <span>Back</span>
    </NuxtLink>
    <ContentDoc v-slot="{ doc }">
      <TextBalancer>
        <h1 class="post-heading">{{ doc.title }}</h1>
      </TextBalancer>
      <img v-if="doc.image" v-bind="doc.image" class="post-image" />
      <ContentRenderer :value="doc" />
    </ContentDoc>
  </div>
</template>

<style>
:where(h1, h2, h3, h4) a {
  text-decoration: none;
}

.breadcrumbs {
  display: flex;
  margin-block: 2rem;
}

.back {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  text-decoration: none;
  margin-block: 2rem;
}

.back:is(:hover, :focus-visible) {
  text-decoration: underline;
}

.back svg {
  height: 1em;
  display: inline;
  opacity: 0.5;
}

.post-image {
  margin-block: 2rem;
}

.post-heading {
  margin-bottom: 0;
}
</style>
