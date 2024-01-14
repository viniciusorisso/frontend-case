<template>
  <div class="layout" :class="{ 'layout-collapsed': sidebarCollapsed }">
    <LayoutHeader></LayoutHeader>
    <LayoutSidebar
      @toggle-collapse="setCollapse()"
      :sidebar-collapsed="sidebarCollapsed"
    ></LayoutSidebar>
    <LayoutMain></LayoutMain>
  </div>
</template>

<script setup>
useHead({
  titleTemplate: "%s - Admin",
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Roboto?display=swap",
      crossorigin: "",
    },
  ],
});

const sidebarCollapsed = ref(false);

const setCollapse = () => {
  sidebarCollapsed.value = !sidebarCollapsed.value;
};

onMounted(() => {
  const { width } = useWindowResize();
  if (width.value < 1024 && width.value > 768) sidebarCollapsed.value = true;
});
</script>

<style>
body {
  font-family: "Inter", sans-serif;
}
.layout {
  display: grid;
  grid-template-columns: 272px 1fr;
  grid-template-rows: 88px 1fr;
  grid-template-areas:
    "side header"
    "side main";

  height: 100vh;
}

.layout-collapsed {
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-template-rows: 88px 1fr;
  grid-template-areas:
    "side header"
    "side main";

  height: 100vh;
}

@media (max-width: 768px) {
  .layout {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 88px 1fr;
    grid-template-areas:
      "header"
      "main";

    height: 100vh;
  }
}
</style>
