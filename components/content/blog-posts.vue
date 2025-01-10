<template>
  <section class="not-prose">
    <ul class="grid drif-cols-1 gap-4">
      <li
        v-for="post in posts"
        :key="post._path"
        class="border border-gray-200 rounded-sm p-4 hover:bg-gray-100 dark:hover:bg-slate-800 font-mono"
      >
        <NuxtLink :to="post._path" class="py-2 link">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </section>
</template>
<script setup>
const { data: posts } = await useAsyncData("blog-list", () =>
  queryContent("/blog")
    .where({ _path: { $ne: "/blog" } })
    .only(["_path", "title"])
    .find()
);
</script>
