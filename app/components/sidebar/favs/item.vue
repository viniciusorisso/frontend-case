<template>
  <button
    type="button"
    class="flex gap-x-3 items-center py-2 px-3 w-34"
    @click="$emit('clicked')"
  >
    <span
      class="w-2 h-2 rounded-full"
      :class="{ 'my-2': isCollapsed }"
      :style="`background-color: ${ellipsisColor}`"
    ></span>
    <p
      v-if="!isCollapsed"
      class="max-w-32 overflow-ellipsis text-[#525866] text-sm font-medium leading-5"
    >
      {{ text }}
    </p>
    <p
      v-if="!isCollapsed"
      class="ml-auto text-sm text-[#868C98] px-2 py-1 border font-medium leading-5"
      style="border-color: #e2e4e9"
    >
      ⌘ {{ index }}
    </p>
  </button>
</template>

<script lang="ts" setup>
const { index } = defineProps<{
  index: number;
  text: string;
  ellipsisColor: string;
}>();

const emit = defineEmits<{
  clicked: [];
}>();

const { isCollapsed } = inject("collapse") as { isCollapsed: boolean };
</script>
