<template>
  <template>
    <div :class="{ 'flex flex-col items-center': isCollapsed }">
      <p class="uppercase text-[#868C98] text-xs font-medium mb-2">Favs</p>
      <div class="flex flex-col gap-y-1">
        <!-- Será apresentado no máximo 4 itens para não quebrar o layout proposto -->
        <SidebarFavsItem
          v-for="({ color, text }, index) in list.slice(0, 4)"
          :text="text"
          :ellipsis-color="color"
          :index="index"
          @clicked="handleClick(index)"
        >
        </SidebarFavsItem>
      </div>
    </div>
  </template>
</template>

<script lang="ts" setup>
const list = [
  {
    color: "#6E3FF3",
    text: "Loom Mobile App",
  },
  {
    color: "#DF1C41",
    text: "Monday Redesign",
  },
  {
    color: "#E255F2",
    text: "Udemy Courses",
  },
];

const handleClick = (item: number): void => {
  console.log(`clicado: ${item}`);
};

const { isCollapsed } = inject("collapse") as { isCollapsed: boolean };
</script>
