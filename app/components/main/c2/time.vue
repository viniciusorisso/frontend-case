<template>
  <p class="text-[#525866] text-base">
    <span class="font-medium text-[#0A0D14]">{{ currentHours }}</span> horas
    <span class="font-medium text-[#0A0D14]">{{ currentMinutes }}</span> minutos
    no total ⏳
  </p>
</template>

<script setup lang="ts">
const props = defineProps<{
  hours: number;
  minutes: number;
  disabled: boolean;
}>();

const isDisabled = toRef(props, "disabled");
const hours = toRef(props, "hours");
const minutes = toRef(props, "minutes");

const currentHours = computed(() => {
  return isDisabled.value ? 0 : hours.value;
});

const currentMinutes = computed(() => {
  return isDisabled.value ? 0 : minutes.value;
});
</script>
