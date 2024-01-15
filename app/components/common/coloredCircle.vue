<template>
  <span
    class="w-2 h-2 rounded-full"
    :class="{ 'my-2': isCollapsed }"
    :style="`background-color: ${currentColor}`"
  ></span>
</template>

<script setup lang="ts">
const props = defineProps<{
  isCollapsed: boolean;
  color: string;
  disabled: boolean;
}>();

const isCollapsed = toRef(props, "isCollapsed");
const ellipsisColor = toRef(props, "color");

const isDisabled = toRef(props, "disabled");

const currentColor = computed(() => {
  return isDisabled.value ? "#CDD0D5" : ellipsisColor.value;
});
</script>
