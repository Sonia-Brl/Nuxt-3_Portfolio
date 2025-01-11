<template>
  <header class="flex justify-between items-start md:items-center py-2">
    <div class="flex items-center md:space-x-12 p-2">
      <div class="hidden md:block">
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
