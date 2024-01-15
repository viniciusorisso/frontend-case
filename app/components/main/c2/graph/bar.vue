<template>
  <div
    class="h-full rounded-sm"
    :style="`width: calc(${currentPercent} * 1%); background-color: ${currentColor};`"
  ></div>
</template>

<script setup lang="ts">
const props = defineProps<{
  color: string;
  percent: number;
  disabled: boolean;
}>();

const isDisabled = toRef(props, "disabled");

const currentColor = computed(() => {
  return isDisabled.value ? "#E2E4E9" : props.color;
});

const currentPercent = computed(() => {
  return isDisabled.value ? 33.3 : props.percent;
});
</script>
