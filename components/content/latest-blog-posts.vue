<template>
  <BlogPosts v-slot="{ posts }" :limit="limit">
    <div v-for="post in posts" :key="post.id">
      <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
    </div>
  </BlogPosts>
</template>
<script setup>
// https://vuejs.org/guide/components/slots.html#scoped-slots
// https://content.nuxt.com/usage/markdown#props
// https://content.nuxt.com/document-driven/introduction
defineProps({
  limit: {
    type: Number,
    default: null,
  },
});
</script>
