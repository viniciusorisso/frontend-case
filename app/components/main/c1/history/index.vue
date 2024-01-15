<template>
  <div v-if="list.length > 0" class="flex flex-col gap-y-3.5 overflow-hidden">
    <p class="text-[#868C98] font-medium text-xs uppercase">
      Tarefas Anteriores
    </p>
    <div class="flex flex-col w-full gap-y-2.5 lg:gap-y-4">
      <MainC1HistoryItem v-for="item in list.slice(0, 3)" :item="item" />
    </div>
  </div>
  <div
    class="flex flex-col justify-center items-center h-full p-3 gap-y-3"
    v-else
  >
    <img class="h-16 w-16" src="@/assets/svg/sem-cronometros.svg" />
    <p class="text-[#868C98] font-medium w-full text-center text-sm">
      Sem registro de atividades
    </p>
  </div>
</template>

<script setup lang="ts">
import type { THistoryItem } from "./types";

const props = defineProps<{
  createTime: boolean;
  newTime: string;
}>();

const list = ref<Array<THistoryItem>>([]);

const createNewTime = (time: string) => {
  list.value.push({
    title: `Tempo ${list.value.length + 1}`,
    time,
    icon: "",
  });
};
const newTime = toRef(props, "createTime");
const userTime = toRef(props, "newTime");

watch(newTime, (newValue) => {
  if (newValue) createNewTime(userTime.value);
});
</script>
