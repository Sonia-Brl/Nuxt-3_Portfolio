<template>
  <div>
    <div class="flex space-x-2 items-center">
      <div class="text-gray-500 text-xs" v-if="showNextModelLabel">
        Changer pour le thème {{ nextMode }}
      </div>
      <button
        @click="toggleMode"
        @mouseenter="showNextModelLabel = true"
        @mouseleave="showNextModelLabel = false"
        class="hover:bg-gray-200 dark:hover:bg-gray-600 px-2 py-1 text-gray-500 text-4xl md:text-base"
      >
        {{ nextModeIcon }}
      </button>
    </div>
  </div>
</template>

<script setup>
const showNextModelLabel = ref(false);
const colorMode = useColorMode();
const modes = [
  "system", // 0
  "light", // 1
  "dark", // 2
]; // .length = 3
const nextModeIcons = {
  system: String("🌓"),
  light: String("🌕"),
  dark: String("🌑"),
};
const nextMode = computed(() => {
  const currentModeIndex = modes.indexOf(colorMode.preference);
  let nextModeIndex = null;
  if (currentModeIndex + 1 === modes.length) {
    nextModeIndex = 0;
  } else {
    nextModeIndex = currentModeIndex + 1;
  }
  return modes[nextModeIndex];
});
const nextModeIcon = computed(() => nextModeIcons[nextMode.value]);
const toggleMode = () => (colorMode.preference = nextMode.value);
</script>

<style>
body {
  font-family: "Roboto";
}
body {
  @apply bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300;
}
</style>
