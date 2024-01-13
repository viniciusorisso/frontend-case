<template>
  <nav class="sidebar hidden lg:flex" style="background-color: #e2e4e9">
    <SidebarBrand />
    <SidebarDivider />
    <SidebarMain />
    <SidebarFavs />
    <div class="mt-auto flex flex-col">
      <span class="flex flex-col">
        <button type="button">Configurações</button
        ><button type="button">Suporte</button>
      </span>
      <SidebarPerfil />
    </div>
  </nav>
</template>

<style scoped>
.sidebar {
  grid-area: side;
}
</style>
