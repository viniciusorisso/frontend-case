<template>
  <div class="flex h-2.5 gap-x-1.5">
    <MainC2GraphBar
      color="#F2AE40"
      :percent="percent1"
      :disabled="isDisabled"
    />
    <MainC2GraphBar
      color="#35B9E9"
      :percent="percent2"
      :disabled="isDisabled"
    />
    <MainC2GraphBar
      color="#6E3FF3"
      :percent="percent3"
      :disabled="isDisabled"
    />
  </div>
</template>

<script setup lang="ts">
const percent1 = ref(20);
const percent2 = ref(50);
const percent3 = ref(30);

const props = defineProps<{
  disabled: boolean;
}>();

const isDisabled = toRef(props, "disabled");
</script>
