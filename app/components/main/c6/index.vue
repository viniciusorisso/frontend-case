<template>
  <section class="bg-white flex flex-col p-4 gap-y-4 h-full">
    <CommonCardHeader
      title="Destaque colaboradores"
      :disabled="disabled"
      button-text="Enviar"
      @clicked="() => (disabled = !disabled)"
    >
      <template #icon>
        <img src="@/assets/svg/estrela.svg" alt="" srcset="" />
      </template>
      <template #buttonIcon>
        <img src="@/assets/svg/enviar.svg" alt="" srcset="" />
      </template>
    </CommonCardHeader>
  </section>
</template>
