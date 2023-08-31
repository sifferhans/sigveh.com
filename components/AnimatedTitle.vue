<script lang="ts" setup>
defineProps<{
  /**
   * Underscore is converted to a line break
   */
  title: `${string}_${string}`;
}>();
</script>

<template>
  <h1 class="lg:text-9xl text-6xl font-serif leading-none">
    <template v-for="(char, index) in title" :key="char">
      <br v-if="char === '_'" />
      <span v-else :data-index="index" :style="`--delay: ${index * 75}ms`">
        {{ char }}
      </span>
    </template>
  </h1>
</template>

<style>
[data-index] {
  animation-name: fade-in;
  animation-duration: 2s;
  animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
  animation-delay: var(--delay);
  animation-fill-mode: forwards;
  opacity: 0;
  translate: 0 0.5em;

  display: inline-block;
}

@keyframes fade-in {
  to {
    opacity: 1;
    translate: 0 0;
  }
}
</style>
