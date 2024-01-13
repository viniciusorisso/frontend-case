import OptionMenu from './optionMenu.vue';
<template>
  <span class="flex flex-col gap-y-3">
    <SidebarOptionItem text="Configurações">
      <template #image>
        <img src="@/assets/svg/configuracoes.svg" alt="Ícone de engrenagem" />
      </template>
    </SidebarOptionItem>
    <SidebarOptionItem text="Suporte">
      <template #image>
        <img src="@/assets/svg/suporte.svg" alt="Ícone de fone de ouvido" />
      </template>
    </SidebarOptionItem>
  </span>
</template>
