<template>
  <div
    class="h-full border rounded-b-lg flex flex-col items-center py-4 gap-y-2.5"
  >
    <span class="flex flex-col items-center gap-y-1">
      <p class="uppercase text-[#868C98] font-medium text-xs text-centers">
        aguardando
      </p>
      <MainC1TrackCron
        :cron-state="cronState"
        :clear="clearCron"
        @set-current-time="setTime"
      />
    </span>
    <div class="flex gap-x-3">
      <MainC1TrackButton
        :button-config="cronState"
        @handle-click="handleClick"
      />
      <span
        class="h-full w-[1px] border-l"
        v-if="cronState === CronState.pausar || isPaused"
      ></span>
      <MainC1TrackButton
        v-if="cronState === CronState.pausar || isPaused"
        :button-config="CronState.parar"
        @handle-click="handleClick"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { CronState } from "./types";

const currentTime = ref("");
const cronState = ref<CronState>(CronState.iniciar);

const isPaused = ref(false);
const clearCron = ref(false);

const handleClick = (state: CronState, timer: string = "") => {
  switch (state) {
    case CronState.parar:
      if (timer === null) {
        currentTime.value = "";
      }
      cronState.value = CronState.iniciar;
      isPaused.value = false;
      clearCron.value = true;
      break;
    case CronState.pausar:
      if (timer === null) {
        currentTime.value = "";
      }
      cronState.value = CronState.iniciar;
      currentTime.value = timer;
      isPaused.value = true;
      break;
    case CronState.iniciar:
      if (timer) currentTime.value = timer;

      isPaused.value = false;
      cronState.value = CronState.pausar;
      clearCron.value = false;
      emit("clearTime");
    default:
      break;
  }
};

const setTime = (newTime: string) => {
  currentTime.value = newTime;
  emit("newTime", newTime);
};

const emit = defineEmits<{
  newTime: [newTime: string];
  clearTime: [];
}>();
</script>
