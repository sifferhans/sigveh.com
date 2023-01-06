<script setup lang="ts"></script>

<template>
  <span class="badge">
    <slot />
  </span>
</template>

<style scoped>
.badge {
  position: relative;
  border-radius: var(--border-radius);
  padding: 0.1rem 0.4rem;
  margin: 0;
  font: inherit;
  font-size: 0.9rem;
  letter-spacing: 0.02em;
  font-weight: 400;
}

.badge::after {
  content: '';
  background-color: currentColor;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: inherit;
  opacity: 0.08;
}
</style>
