<template>
  <nav
    class="sidebar hidden md:flex flex-col bg-white border px-5"
    style="border-color: #e2e4e9"
  >
    <SidebarBrand @toggleCollapse="setCollapsed()" />
    <CommonDivider
      class="w-full border-b h-1 mb-5"
      style="border-color: #e2e4e9"
    />
    <SidebarMain />
    <SidebarFavs />
    <div
      class="mt-auto flex flex-col items-start"
      :class="{ 'items-center': sidebarCollapsed }"
    >
      <SidebarConfigs />
      <CommonDivider class="mt-5" style="border-color: #e2e4e9" />
      <SidebarPerfil />
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { provide } from "vue";

const props = defineProps<{
  sidebarCollapsed: boolean;
}>();
const sidebarCollapsed = toRef(props, "sidebarCollapsed");

const emit = defineEmits<{
  toggleCollapse: [];
}>();

const setCollapsed = () => {
  emit("toggleCollapse");
};

provide("collapse", { isCollapsed: sidebarCollapsed });
</script>

<style scoped>
.sidebar {
  grid-area: side;
}
</style>
