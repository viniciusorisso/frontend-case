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
  titleTemplate: "Dashboard - Admin",
});

const sidebarCollapsed = ref(true);

const width = ref(0);

const setCollapse = () => {
  sidebarCollapsed.value = !sidebarCollapsed.value;
};

onMounted(() => {
  width.value = window.innerWidth;
  window.addEventListener("resize", handlerResize);
  handlerResize();
});

onUnmounted(() => {
  window.removeEventListener("resize");
});

const handlerResize = () => {
  width.value = window.innerWidth;
  if (width.value < 1284 && width.value > 768) sidebarCollapsed.value = true;
  if (width.value > 1284) sidebarCollapsed.value = false;
};
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
