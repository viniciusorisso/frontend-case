<template>
  <div class="flex gap-x-2.5 items-center">
    <span
      class="h-10 w-10 rounded-full border flex items-center justify-center"
    >
      <img src="@/assets/svg/loom.svg" />
    </span>
    <span class="flex flex-col">
      <p class="text-sm text-[#0A0D14]">{{ item.title }}</p>
      <p class="text-xs text-[#525866]">{{ item.time }}</p>
    </span>
    <button type="button" class="ml-auto">
      <img src="@/assets/svg/3-pontos.svg" />
    </button>
  </div>
</template>

<script lang="ts" setup>
import type { THistoryItem } from "./types";

const { item } = defineProps<{
  item: THistoryItem;
}>();
</script>
