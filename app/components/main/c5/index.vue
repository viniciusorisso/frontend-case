<template>
  <section class="bg-white flex flex-col p-4 gap-y-3 md:gap-y-5">
    <div class="flex gap-x-2">
      <img src="@/assets/svg/feedback.svg" alt="" srcset="" />
      <p class="text-base font-medium">Feedback diário</p>
    </div>
    <CommonDivider />
    <div class="flex flex-col items-center gap-2">
      <img
        class="h-10 w-10"
        src="@/assets/svg/usuario-feedback.svg"
        alt=""
        srcset=""
      />
      <div class="flex flex-col gap-1 md:gap-3 text-center">
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
  </section>
</template>
