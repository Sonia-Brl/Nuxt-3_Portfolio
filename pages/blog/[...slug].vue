<template>
  <article
    class="max-w-none prose dark:prose-invert prose-pre:bg-gray-200 dark:prose-pre:bg-gray-800 prose-pre:text-gray-700 dark:prose-pre:text-gray-300"
  >
    <ContentDoc v-slot="{ doc }">
      {{ doc.body.toc.links }}
      <ContentRenderer :value="doc" />
    </ContentDoc>
  </article>
</template>
<script setup>
const route = useRoute();
//console.log(route.params.slug);
</script>
