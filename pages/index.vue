<script lang="ts" setup>
const titleAnimated = ref(false);
</script>

<template>
  <AnimatedTitle title="Sigve_Hansen" @done="titleAnimated = true" />
  <PostsList v-if="titleAnimated" />
</template>
