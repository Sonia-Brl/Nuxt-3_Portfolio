<template>
  <div class="container mx-auto">
    <header class="flex justify-between py-2">
      <div>
        <NuxtLink to="/" class="text-xl font-semibold p-2 hover:bg-gray-200"
          >Sonia Brunel</NuxtLink
        >
      </div>
      <nav class="font-mono">
        <ul class="flex space-x-4">
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/blog">Blog</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <main class="p-2">
      <slot />
    </main>
  </div>
</template>
