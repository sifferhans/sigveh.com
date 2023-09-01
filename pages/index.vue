<script lang="ts" setup>
const titleAnimated = ref(false);
</script>

<template>
  <div>
    <AnimatedTitle title="Sigve_Hansen" @done="titleAnimated = true" />
    <PostsList v-if="titleAnimated" />
  </div>
</template>
