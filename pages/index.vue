<template>
  <div>
    <h1>Hello world</h1>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Welcome",
  ogTitle: "Main page",
  ogDescription: "This iss the main page",
  ogImage: "[og:image]",
  ogUrl: "[og:url]",
  twitterTitle: "Main page",
  twitterDescription: "[twitter:description]",
  twitterImage: "[twitter:image]",
  twitterCard: "summary",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],
});
</script>
