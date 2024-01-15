<template>
  <div
    class="flex h-[160px] w-[160px] lg:h-[80px] lg:w-[80px] justify-center items-center relative"
    style="transform: rotateY(180deg)"
  >
    <svg>
      <circle cx="35" cy="35" r="35"></circle>
      <circle
        :style="`stroke-dashoffset:${strokeOffset}px`"
        cx="35"
        cy="35"
        r="35"
      ></circle>
    </svg>
    <span
      class="absolute top-0 left-0 w-full h-full flex justify-center items-center text-sm font-medium text-[text-sm]"
      style="transform: rotateY(-180deg)"
      >{{ percent }}%</span
    >
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  disabled: boolean;
  percent: number;
}>();

const currentPercent = toRef(props, "percent");
const isDisabled = toRef(props, "disabled");

const percent = computed(() => {
  return isDisabled.value ? 0 : currentPercent.value;
});

const strokeOffset = computed(() => {
  return ((percent.value + 100) / 100) * 220 - 440;
});
</script>

<style scoped>
svg {
  width: 5rem;
  height: 5rem;
  position: relative;
  transform: rotate(-90deg);
}

circle {
  width: 5rem;
  height: 5rem;
  fill: none;
  stroke: black;
  stroke-width: 7.5;
  transform: translate(5px, 5px);
  stroke-dasharray: 440px;
  stroke-dashoffset: 440px;
}

circle:nth-child(1) {
  stroke-dasharray: 0;
  stroke-dashoffset: 0;
  stroke: #e2e4e9;
}
circle:nth-child(2) {
  stroke-dashoffset: 440px;
  stroke: #ff4a00;
}
</style>
