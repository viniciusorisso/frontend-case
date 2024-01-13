<template>
  <nav
    class="sidebar hidden lg:flex flex-col bg-white border px-5"
    style="border-color: #e2e4e9"
  >
    <SidebarBrand />
    <SidebarDivider
      class="w-full border-b h-1 mb-5"
      style="border-color: #e2e4e9"
    />
    <SidebarMain />
    <SidebarFavs />
    <div class="mt-auto flex flex-col items-start">
      <SidebarConfigs />
      <SidebarDivider class="mt-5" style="border-color: #e2e4e9" />
      <SidebarPerfil />
    </div>
  </nav>
</template>

<style scoped>
.sidebar {
  grid-area: side;
}
</style>
