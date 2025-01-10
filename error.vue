<template>
  <NuxtLayout>
    <section>
      <h1 class="text-4xl mb-4">Opps {{ error.statusCode }}</h1>
      <h2 class="text-xl text-gray-500 dark:text-gray-400">
        {{ error.statusMessage }}
      </h2>
    </section>
  </NuxtLayout>
</template>
<script setup>
// https://nuxt.com/docs/getting-started/error-handling
// https://vuejs.org/guide/components/slots.html#named-slots
// https://content.nuxt.com/components/content-doc#slots
defineProps({ error: Object });
</script>
