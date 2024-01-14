<template>
  <button
    type="button"
    class="h-[88px] p-1 gap-x-3 flex items-center cursor-pointer w-full"
    :class="{ 'justify-center': isCollapsed }"
    @click="handleClick"
  >
    <img src="@/assets/svg/avatar.svg" alt="Imagem do Avatar" />
    <span class="flex flex-col gap-y-1 text-start" v-if="!isCollapsed">
      <p class="text-sm font-medium inline-block">
        Sophia Williams<img
          src="@/assets/svg/icone-verificado.svg"
          alt="Ícone de confirmado"
        />
      </p>
      <p class="text-xs text-[#525866]">sophia@jurisoft.com</p>
    </span>
    <img
      class="ml-auto"
      src="@/assets/svg/seta-direita.svg"
      v-if="!isCollapsed"
    />
  </button>
</template>

<script lang="ts" setup>
const handleClick = ($event: Event) => {
  console.log("clicou");
};

const { isCollapsed } = inject("collapse") as { isCollapsed: boolean };
</script>
