<template>
  <header class="flex justify-between items-center py-2">
    <div class="flex items-center space-x-12">
      <div>
        <NuxtLink
          to="/"
          class="text-xl font-semibold p-2 hover:bg-gray-200 hover:dark:bg-slate-800"
          >Sonia Brunel</NuxtLink
        >
      </div>
      <Menu />
    </div>
    <ClientOnly>
      <ColorModeSelector />
    </ClientOnly>
  </header>
</template>
