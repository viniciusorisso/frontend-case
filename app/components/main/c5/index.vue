<template>
  <section class="bg-white flex flex-col p-4 gap-y-2 lg:gap-y-5 h-full">
    <div class="flex gap-x-2">
      <img src="@/assets/svg/feedback.svg" alt="" srcset="" />
      <p class="text-base font-medium">Feedback diário</p>
      <button
        type="button"
        class="h-6 w-6 rounded-full bg-[#FF4A00] flex justify-center items-center ml-auto"
        v-if="!feedbackActive"
        @click="feedbackActive = true"
      >
        <img class="h-4 w-4" src="@/assets/svg/mais.svg" />
      </button>
    </div>
    <CommonDivider />
    <div v-if="feedbackActive" class="h-full">
      <div class="flex flex-col items-center gap-2">
        <img
          class="h-8 w-8 lg:w-10 lg:h-10"
          src="@/assets/svg/usuario-feedback.svg"
          alt=""
          srcset=""
        />
        <div class="flex flex-col gap-1 lg:gap-2 text-center">
          <p class="text-sm md:text-base font-medium">
            Como você classificaria seu humor hoje?
          </p>
          <p class="text-[10px] md:text-xs font-normal text-[#525866]">
            Compartilhe seu humor para nos ajudar a entender
          </p>
        </div>
      </div>
      <MainC5Feed />
      <MainC5Button />
    </div>
    <div
      class="flex flex-col justify-center items-center gap-y-5 h-full"
      v-else
    >
      <img src="@/assets/svg/sem-feedback.svg" alt="" />
      <p class="text-sm text-[#868C98] text-center">
        Sem registros de feedback ainda. Por favor, verifique mais tarde.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const feedbackActive = ref(false);
</script>
