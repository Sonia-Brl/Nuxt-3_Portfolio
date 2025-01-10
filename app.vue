<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
/**
 https://nuxt.com/docs/getting-started/transitions
 https://vuejs.org/guide/built-ins/transition.html#the-transition-component
*/
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0.5;
  filter: grayscale(1);
}
</style>
