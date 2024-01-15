<template>
  <section class="bg-white flex flex-col p-4 gap-y-4 h-full">
    <CommonCardHeader title="Feedback diário">
      <template #icon>
        <img class="h-6 w-6" src="@/assets/svg/feedback.svg" alt="" srcset="" />
      </template>
    </CommonCardHeader>
    <CommonDivider />
    <div v-if="feedbackActive" class="h-full">
      <div class="flex flex-col items-center gap-2">
        <img
          class="h-8 w-8 lg:w-10 lg:h-10"
          src="@/assets/svg/usuario-feedback.svg"
          alt=""
          srcset=""
        />
        <div class="flex flex-col gap-0 lg:gap-2 text-center">
          <p class="text-xs 2xl:text-base font-medium">
            Como você classificaria seu humor hoje?
          </p>
          <p class="text-[10px] 2xl:text-xs font-normal text-[#525866]">
            Compartilhe seu humor para nos ajudar a entender
          </p>
        </div>
      </div>
      <MainC5Feed />
      <MainC5Button @clicked="feedbackActive = !feedbackActive" />
    </div>
    <div
      class="flex flex-col justify-center items-center gap-y-5 h-full"
      v-else
    >
      <img class="h-[6rem]" src="@/assets/svg/sem-feedback.svg" alt="" />
      <p class="text-sm text-[#868C98] text-center">
        Sem registros de feedback ainda. Por favor, verifique mais tarde.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const feedbackActive = ref(true);
</script>
