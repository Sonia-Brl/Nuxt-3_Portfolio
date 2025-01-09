<template>
  <div>Project list component</div>
  <section v-if="status === 'pending'">Loading...</section>
  <section v-else-if="error">Something went wrong ... Try again!</section>
  <section v-else>We will display the repos!</section>
</template>

<script setup>
const {
  error,
  status,
  data: gitProjects,
} = await useFetch("https://api.github.com/users/Sonia-Brl/repos");
console.log("data :", gitProjects);
</script>
