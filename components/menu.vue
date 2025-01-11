<script setup lang="ts">
import ColorModeSelector from "./color-mode-selector.vue";
</script>

<template>
  <nav class="font-mono">
    <ul class="flex flex-col md:flex-row md:space-x-4">
      <li>
        <NuxtLink to="/projects" class="link">Projects</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about" class="link">About</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/blog" class="link">Blog</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/contact" class="link">Contact</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.link {
  @apply p-1 hover:bg-gray-200 hover:dark:bg-slate-800 text-2xl md:text-base;
}
</style>
