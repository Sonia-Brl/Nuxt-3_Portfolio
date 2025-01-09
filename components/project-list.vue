<template>
  <p class="mb-10">Take a look to my Github projects</p>
  <section v-if="status === 'pending'">Loading...</section>
  <section v-else-if="error">Something went wrong ... Try again!</section>
  <section v-else>
    <ul class="grid drif-cols-1 gap-4">
      <li
        v-for="gitPorject in gitProjects"
        :key="gitPorject.id"
        class="border border-gray-200 rounded-sm p-4 hover:bg-gray-100 font-mono"
      >
        <a :href="gitPorject.html_url" target="_blank">
          <div class="flex items-center justify-between text-sm">
            <div class="font-semibold">
              <h3>{{ gitPorject.name }}</h3>
            </div>
            <div>{{ gitPorject.stargazers_count }} *</div>
          </div>
          <p class="text-sm">{{ gitPorject.description }}</p>
        </a>
      </li>
    </ul>
  </section>
</template>

<script setup>
const {
  error,
  status,
  data: gitProjects,
} = await useFetch("https://api.github.com/users/Sonia-Brl/repos");
console.log("data :", gitProjects);
</script>
