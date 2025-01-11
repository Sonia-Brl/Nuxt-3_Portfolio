<template>
  <div class="not-prose">
    <section v-if="status === 'pending'">En chargement...</section>
    <section v-else-if="error">
      Une erreure s'es produite ... Essayer encore !
    </section>
    <section v-else>
      <ul class="grid drif-cols-1 gap-4">
        <li
          v-for="gitPorject in repos"
          :key="gitPorject.id"
          class="border border-gray-200 dark:border-slate-800 rounded-sm p-4 hover:bg-gray-100 dark:hover:bg-slate-800 font-mono"
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
  </div>
</template>

<script setup>
const {
  error,
  status,
  data: gitProjects,
} = await useFetch("https://api.github.com/users/Sonia-Brl/repos");
//console.log("data :", gitProjects);
// Retirer les repos qui n'on pas de description et dont la description n'est pas "Mon dépôt"
const repos = computed(() =>
  gitProjects.value
    .filter((repo) => repo.description && repo.description != "Mon dépôt")
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
);
</script>
