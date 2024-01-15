<template>
  <section class="bg-white flex flex-col p-4 gap-y-4 h-full">
    <CommonCardHeader
      title="Cursos"
      :disabled="disabled"
      button-text="Ver todos"
      @clicked="() => (disabled = !disabled)"
    >
      <template #icon>
        <img src="@/assets/svg/cursos.svg" alt="" srcset="" />
      </template>
    </CommonCardHeader>
  </section>
</template>
