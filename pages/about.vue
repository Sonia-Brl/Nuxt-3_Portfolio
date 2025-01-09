<template>
  <div>
    This page is about me

    <!--     <div>
      <button @click="enableCustomLayout">Update layout</button>
    </div> -->
  </div>
</template>

<script setup lang="ts">
/* function enableCustomLayout() {
  setPageLayout("another");
} */

useHead({
  title: "About",
  /*   meta: [
    { name: "description", content: "Portfolio of Sonia Brunel's projects" },
  ],
  bodyAttrs: {
    class: "test",
  },
  script: [{ innerHTML: "console.log('in the about page')" }], */
});
</script>
