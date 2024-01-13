<template>
  <button
    type="button"
    class="h-[88px] p-1 gap-x-3 flex items-center cursor-pointer"
    @click="handleClick"
  >
    <img src="@/assets/svg/jurisoft.svg" alt="Imagem da logo" />
    <span class="flex flex-col gap-y-1 text-start">
      <p class="text-sm font-semibold">Jurisoft</p>
      <p class="text-xs text-[#525866]">Marketing Jurídico</p>
    </span>
    <img class="ml-auto" src="@/assets/svg/seta-down.svg" />
  </button>
</template>

<script setup>
const handleClick = ($event) => {
  console.log("clicou");
};
</script>
