<template>
  <section class="bg-white flex flex-col p-4 gap-y-2 lg:gap-y-4 h-full">
    <CommonCardHeader
      title="Cursos - Progresso"
      :disabled="disabled"
      button-text="Ver todos"
      @clicked="() => (disabled = !disabled)"
    >
      <template #icon>
        <img src="@/assets/svg/cursos.svg" alt="" srcset="" />
      </template>
    </CommonCardHeader>
    <CommonDivider />
    <div class="flex gap-x-5 py-4 lg:py-0">
      <MainC3Graph :percent="percent" :disabled="disabled" />
      <MainC3Text
        :title="title"
        :description="description"
        :link="link"
        :disabled="disabled"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const disabled = ref(false);

const percent = ref(75);
const title = ref("Diversidade da equipe");
const description = ref(
  "Projetado para promover a inclusividade e perspectivas diversas."
);
const link = ref("#");
</script>
