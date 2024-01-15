<template>
  <button
    type="button"
    class="h-[88px] p-1 gap-x-3 flex items-center cursor-pointer w-full"
    @click="handleClick"
  >
    <img src="@/assets/svg/jurisoft.svg" alt="Imagem da logo" />
    <span v-if="!isCollapsed" class="flex flex-col gap-y-1 text-start">
      <p class="text-sm font-medium">Jurisoft</p>
      <p class="text-xs text-[#525866]">Marketing Jurídico</p>
    </span>
    <img
      v-if="!isCollapsed"
      class="ml-auto"
      src="@/assets/svg/seta-baixo.svg"
    />
  </button>
</template>

<script lang="ts" setup>
import { inject } from "vue";

const emit = defineEmits<{
  toggleCollapse: [];
}>();

const handleClick = ($event: Event) => {
  emit("toggleCollapse");
};

const { isCollapsed } = inject("collapse") as { isCollapsed: boolean };
</script>
