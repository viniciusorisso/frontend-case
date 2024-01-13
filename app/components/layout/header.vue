<template>
  <header
    class="header bg-white flex justify-end px-8 py-5 align-middle gap-x-6 lg:gap-x-3"
  >
    <div class="mr-auto flex gap-x-3">
      <a href="#">
        <img
          class="h-full"
          src="@/assets/svg/avatar.svg"
          alt="Avatar do usuário"
        />
      </a>
      <span>
        <div>
          <p class="font-semibold text-base md:text-xl md:block">
            Sophia Williams
          </p>
          <p class="md:block text-sm" style="color: #525866">
            Bem-vinda de volta 👋🏻
          </p>
        </div>
      </span>
    </div>
    <span class="ml-auto gap-x-6 lg:gap-x-3 flex">
      <button type="button">
        <img
          class="h-6 lg:h-4"
          src="@/assets/svg/lupa.svg"
          alt="Imagem de uma lupa"
        />
      </button>
      <button type="button">
        <img
          class="h-7 lg:h-5"
          src="@/assets/svg/notificacoes.svg"
          alt="Imagem de um sino"
        />
      </button>
    </span>
    <div class="gap-x-3 hidden lg:flex">
      <a
        href="#"
        class="w-fit p-2 rounded-xl flex border gap-x-1 items-center font-semibold"
        style="border-color: #e2e4e9; color: #525866"
      >
        <img
          class=""
          src="@/assets/svg/calendario-checked.svg"
          alt="Avatar do usuário"
        />Calendário
      </a>
      <a
        href="#"
        class="w-fit p-2 rounded-xl flex border text-white text-sm items-center gap-x-1"
        style="background-color: #ff4a00"
      >
        <img
          class="h-5 w-5 block"
          src="@/assets/svg/mais.svg"
          alt="Avatar do usuário"
        />Nova solicitacao
      </a>
    </div>
    <button
      type="button"
      class="lg:hidden flex items-center"
      @click="handleMenuClick"
    >
      <img
        class="h-7"
        src="@/assets/svg/hamburger-menu.svg"
        alt="Imagem de menu hambúrguer"
      />
    </button>
  </header>
</template>

<script setup>
const handleMenuClick = ($event) => {
  console.log('abriu')
}
</script>

<style scoped>
.header {
  grid-area: header;
}
</style>
