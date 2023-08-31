<template>
  <main class="flex flex-col h-full p-4 lg:p-8">
    <ul class="flex gap-6 lg:gap-8 text-lg lg:text-2xl mb-4 lg:mb-6">
      <li>
        <NuxtLink
          to="/posts"
          class="opacity-50 hover:opacity-100 transition-opacity duration-400 ease"
        >
          Posts
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/projects"
          class="opacity-50 hover:opacity-100 transition-opacity duration-400 ease"
        >
          Projects
        </NuxtLink>
      </li>
    </ul>
    <slot />
  </main>
</template>
