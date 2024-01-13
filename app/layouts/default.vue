<template>
  <div class="layout">
    <LayoutHeader></LayoutHeader>
    <LayoutSidebar></LayoutSidebar>
    <LayoutMain></LayoutMain>
  </div>
</template>

<script setup>
useHead({
  titleTemplate: '%s - Admin',
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto?display=swap',
      crossorigin: '',
    },
  ],
})
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
}

.layout {
  display: grid;
  grid-template-columns: 272px 1fr;
  grid-template-rows: 88px 1fr;
  grid-template-areas:
    'side header'
    'side main';

  height: 100vh;
}

@media (max-width: 925px) {
  .layout {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 88px 1fr;
    grid-template-areas:
      'header'
      'main';

    height: 100vh;
  }
}
</style>
