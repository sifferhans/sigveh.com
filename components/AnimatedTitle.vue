<script lang="ts" setup>
defineProps<{
  /**
   * Underscore is converted to a line break
   */
  title: `${string}_${string}`;
}>();
</script>

<template>
  <h1 class="text-9xl font-serif">
    <template v-for="(char, index) in title" :key="char">
      <br v-if="char === '_'" />
      <span v-else :data-index="index" :style="`--delay: ${index * 100}ms`">
        {{ char }}
      </span>
    </template>
  </h1>
</template>

<style>
[data-index] {
  animation-name: fade-in;
  animation-duration: 1.5s;
  animation-timing-function: ease;
  animation-delay: var(--delay);
  animation-fill-mode: forwards;
  opacity: 0;
  translate: 0 4rem;

  display: inline-block;
}

@keyframes fade-in {
  to {
    opacity: 1;
    translate: 0 0;
  }
}
</style>
