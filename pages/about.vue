<template>
  <div>
    This page is about me

    <div>
      <button @click="enableCustomLayout">Update layout</button>
    </div>
  </div>
</template>

<script setup>
function enableCustomLayout() {
  setPageLayout("another");
}
</script>
