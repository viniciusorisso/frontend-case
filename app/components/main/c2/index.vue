<template>
  <section class="bg-white flex flex-col p-4 gap-y-2 lg:gap-y-4 h-full">
    <CommonCardHeader
      button-text="Detalhes"
      title="Horas diárias de trabalho"
      @clicked="(value) => (isDisabled = !isDisabled)"
    >
      <template #icon>
        <img
          class="h-6 w-6"
          src="@/assets/svg/horas-trabalhadas.svg"
          alt=""
          srcset=""
        />
      </template>
    </CommonCardHeader>
    <CommonDivider />
    <div class="flex flex-col gap-y-2">
      <MainC2Time :disabled="isDisabled" :hours="12" :minutes="27" />
      <MainC2Graph :disabled="isDisabled" />
      <MainC2GraphGuide :disabled="isDisabled" />
    </div>
  </section>
</template>

<script setup lang="ts">
const isDisabled = ref(true);
</script>
