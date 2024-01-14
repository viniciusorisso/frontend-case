<template>
  <section class="bg-white flex flex-col p-4 gap-y-2 lg:gap-y-5 h-full">
    <div class="flex justify-between gap-x-1 gap-y-2 flex-wrap lg:flex-nowrap">
      <span class="flex gap-x-2 justify-center items-center">
        <img class="h-6 w-6" src="@/assets/svg/temporizador.svg" alt="" />
        <p class="font-medium text-sm xl:text-base text-[#0A0D14] leading-5">
          Rastreador de tempo
        </p>
      </span>
      <button
        class="flex p-2 gap-x-2 justify-center items-center font-medium text-xs xl:text-sm text-[#525866] border rounded-lg"
        style="border-color: #e2e4e9"
      >
        <img src="@/assets/svg/historico.svg" alt="" srcset="" />
        <p class="lg:hidden xl:block">Histórico</p>
      </button>
    </div>
    <MainC1Track @new-time="createNewTime" @clear-time="clearTime()" />
    <MainC1History :create-time="newTime" :new-time="userNewTime" />
  </section>
</template>

<script setup lang="ts">
const newTime = ref(false);
const userNewTime = ref("");

const createNewTime = (userTime: string) => {
  userNewTime.value = userTime;
  newTime.value = true;
};

const clearTime = () => {
  newTime.value = false;
  userNewTime.value = "";
};
</script>
