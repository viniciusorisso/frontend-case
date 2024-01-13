<template>
  <div>
    <p class="uppercase text-[#868C98] text-xs font-medium mb-2">Main</p>
    <div class="flex flex-col gap-y-1">
      <SidebarMainItem
        v-for="({ image, text }, index) in list"
        :text="text"
        :active="itemActive === index"
        @activate="changeItemActivated(index)"
      >
        <template #image>
          <img :src="image" />
        </template>
      </SidebarMainItem>
    </div>
  </div>
</template>

<script lang="ts" setup>
const getImageUrl = (image: string) => {
  // Só está sendo utilizado este modo para evitar utilizar libs e/ou pacotes externos
  // Também desconsiderei utilizar a abordagem de colocar na pasta public e utilizar sem
  // o trecho de código abaixos
  const key = `../../../assets/svg/${image}.svg`;
  const url = new URL(key, import.meta.url);

  return url.href;
};

const list = [
  {
    image: getImageUrl("dashboard"),
    text: "Dashboard",
  },
  {
    image: getImageUrl("calendario"),
    text: "Calendário",
  },
  {
    image: getImageUrl("descanso"),
    text: "Descanso",
  },
  {
    image: getImageUrl("projetos"),
    text: "Projetos",
  },
  {
    image: getImageUrl("times"),
    text: "Times",
  },
  {
    image: getImageUrl("integracoes"),
    text: "Integracoes",
  },
  {
    image: getImageUrl("beneficios"),
    text: "Benefícios",
  },
  {
    image: getImageUrl("documentos"),
    text: "Documentos",
  },
];

const itemActive = ref(0);

const changeItemActivated = (item: number): void => {
  itemActive.value = item;
};
</script>
