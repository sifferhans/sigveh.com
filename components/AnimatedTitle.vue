<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    /**
     * Underscore is converted to a line break
     */
    title: `${string}_${string}`;
    delay?: number;
    shouldAnimate?: boolean;
  }>(),
  {
    delay: 75,
  }
);

const emit = defineEmits(["done"]);

const time = computed(() => props.delay * props.title.length);

onMounted(() => {
  if (!props.shouldAnimate) return;

  setTimeout(() => {
    emit("done");
  }, time.value);
});
</script>

<template>
  <h1
    :data-animated="shouldAnimate"
    class="md:text-9xl text-7xl font-serif leading-none"
  >
    <template v-for="(char, index) in title" :key="char">
      <br v-if="char === '_'" />
      <span v-else :data-index="index" :style="`--delay: ${index * delay}ms`">
        {{ char }}
      </span>
    </template>
  </h1>
</template>

<style scoped>
[data-index] {
  display: inline-block;
}

[data-animated="true"] [data-index] {
  animation-name: fade-in;
  animation-duration: 2s;
  animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
  animation-delay: var(--delay);
  animation-fill-mode: forwards;
  opacity: 0;
  translate: 0 0.5em;
}

@keyframes fade-in {
  to {
    opacity: 1;
    translate: 0 0;
  }
}
</style>
