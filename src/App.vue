<template>
  <section class="flex flex-col min-h-screen">
    <NavBar />
    <main class="px-7 py-10 flex-1">
      <router-view />
    </main>
    <Footer />
  </section>
</template>

<script setup lang="ts">
useHead({
  meta: [
    { property: 'og:title', content: 'Anthony Fu' },
    { property: 'og:image', content: 'https://antfu.me/avatar.png' },
    { name: 'description', content: 'Anthony Fu\'s Portfolio' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:creator', content: '@antfu7' },
  ],
})

</script>
