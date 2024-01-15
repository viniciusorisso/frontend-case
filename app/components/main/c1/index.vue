<template>
  <section class="bg-white flex flex-col p-4 gap-y-2 lg:gap-y-5 h-full">
    <CommonCardHeader button-text="Detalhes" title="Horas diárias de trabalho">
      <template #icon>
        <img
          class="h-6 w-6"
          src="@/assets/svg/temporizador.svg"
          alt=""
          srcset=""
        />
      </template>
      <template #buttonIcon>
        <img src="@/assets/svg/historico.svg" alt="" srcset="" />
      </template>
    </CommonCardHeader>
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
