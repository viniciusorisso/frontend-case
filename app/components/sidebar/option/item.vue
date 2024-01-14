<template>
  <button type="button" class="flex gap-2 items-center">
    <span class="h-6 w-6 flex items-center justify-center">
      <slot name="image"></slot>
    </span>
    <p class="text-sm font-medium text-[#525866]" v-if="!isCollapsed">
      {{ text }}
    </p>
  </button>
</template>

<script lang="ts" setup>
const { text } = defineProps<{
  text: string;
}>();

const { isCollapsed } = inject("collapse") as { isCollapsed: boolean };
</script>
