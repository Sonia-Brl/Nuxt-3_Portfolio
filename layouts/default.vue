<template>
  <div class="container mx-auto">
    <TheHeader />
    <main class="p-2">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
useHead({
  // as a string,
  // where `%s` is replaced with the title
  titleTemplate: "%s - Sonia Brunel",

  // or as a function
  /*   titleTemplate: (productCategory) => {
    return productCategory
      ? `${productCategory} - Site Title`
      : 'Site Title'
  } */
});
</script>
