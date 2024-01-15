<template>
  <button type="button" class="flex gap-x-2 gap-y-3" @click="handleClick()">
    <img :src="formatInfo.get(config)!.svg" alt="" />
    <p
      class="font-medium text-xs first-letter:uppercase"
      :style="`color: ${formatInfo.get(config)!.color}`"
    >
      {{ formatInfo.get(config)!.text }}
    </p>
  </button>
</template>

<script lang="ts" setup>
import { useAsset } from "~/composables/useAsset";
import { CronState } from "./types";

const props = defineProps<{
  buttonConfig: CronState;
}>();

const config = toRef(props, "buttonConfig");

type TInfo = {
  color: string;
  svg: string;
  text: string;
};

const emit = defineEmits<{
  handleClick: [state: CronState, timer?: string];
}>();

const formatInfo = new Map<string, TInfo>();

formatInfo.set("iniciar", {
  color: "#FF4A00",
  svg: useAsset("seta-direita-preenchida"),
  text: "Iniciar",
});
formatInfo.set("pausar", {
  color: "#0A0D14",
  svg: useAsset("pause"),
  text: "Pausar",
});
formatInfo.set("parar", {
  color: "#DF1C41",
  svg: useAsset("parar"),
  text: "Parar",
});

const handleClick = () => {
  if (config.value === CronState.parar) {
    emit("handleClick", config.value);

    return;
  }

  emit("handleClick", config.value);
};
</script>
