<template>
  <div class="mb-5" :class="{ 'flex flex-col items-center': isCollapsed }">
    <p class="uppercase text-[#868C98] text-xs font-medium mb-2">Main</p>
    <div class="flex flex-col gap-y-1">
      <SidebarMainItem
        v-for="({ image, text }, index) in list"
        :text="text"
        :active="itemActive === index"
        @activate="changeItemActivated(index)"
      >
        <template #image> <img :src="image" /> </template>
      </SidebarMainItem>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAsset } from "~/composables/useAsset";

const list = [
  {
    image: useAsset("dashboard"),
    text: "Dashboard",
  },
  {
    image: useAsset("calendario"),
    text: "Calendário",
  },
  {
    image: useAsset("descanso"),
    text: "Descanso",
  },
  {
    image: useAsset("projetos"),
    text: "Projetos",
  },
  {
    image: useAsset("times"),
    text: "Times",
  },
  {
    image: useAsset("integracoes"),
    text: "Integracoes",
  },
  {
    image: useAsset("beneficios"),
    text: "Benefícios",
  },
  {
    image: useAsset("documentos"),
    text: "Documentos",
  },
];

const itemActive = ref(0);

const changeItemActivated = (item: number): void => {
  itemActive.value = item;
};

const { isCollapsed } = inject("collapse") as { isCollapsed: boolean };
</script>
