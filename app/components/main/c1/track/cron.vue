<template>
  <p class="text-4xl text-[#0A0D14] font-medium">
    <span>{{ hours }}</span
    >:<span>{{ minutes }}</span
    >:<span class="text-[#868C98]">{{ seconds }}</span>
  </p>
</template>

<script lang="ts" setup>
import { CronState } from "./types";

const hours = ref("00");
const minutes = ref("00");
const seconds = ref("00");

const props = defineProps<{
  cronState: CronState;
  clear: boolean;
}>();

const cState = toRef(props, "cronState");
const cClear = toRef(props, "clear");

const cronActive = computed(() => {
  return cState.value === CronState.pausar;
});

watch(cClear, (newState) => {
  if (newState === true) stop();
});

setInterval(() => {
  if (!cronActive.value) return;

  let h = +hours.value;
  let s = +seconds.value;
  let m = +minutes.value;

  s += 1;

  if (s === 60) {
    s = 0;
    m += 1;
  }

  if (m === 60) {
    m = 0;
    h += 1;
  }

  seconds.value = (s < 10 ? "0" : "") + s;
  minutes.value = (m < 10 ? "0" : "") + m;
  hours.value = (h < 10 ? "0" : "") + h;
}, 1000);

const stop = () => {
  emit("setCurrentTime", `${hours.value}:${minutes.value}:${seconds.value}`);

  hours.value = "00";
  minutes.value = "00";
  seconds.value = "00";
};

const emit = defineEmits<{
  setCurrentTime: [newTime: string];
}>();
</script>
