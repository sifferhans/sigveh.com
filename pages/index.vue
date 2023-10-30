<script lang="ts" setup>
const titleStore = useTitleStore();
</script>

<template>
  <div>
    <AnimatedTitle
      title="Sigve_Hansen"
      :should-animate="!titleStore.hasAnimated"
      @done="titleStore.setAnimated(true)"
    />
    <PostsList v-if="titleStore.hasAnimated" />
  </div>
</template>
