<template>
  <div class="w-full flex flex-col gap-y-5 lg:gap-y-1">
    <p class="text-base lg:text-sm text-[#0A0D14] font-medium leading-4">
      {{ title }}
    </p>
    <p class="text-sm lg:text-xs text-[#525866] leading-4">{{ description }}</p>
    <a :href="link" class="text-sm lg:text-xs text-[#FF4A00] underline">{{
      linkText
    }}</a>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
  link: string;
  disabled: boolean;
}>();

const currentTitle = toRef(props, "title");
const currentDescription = toRef(props, "description");
const currentLink = toRef(props, "link");
const isDisabled = toRef(props, "disabled");

const title = computed((): string => {
  return isDisabled.value ? "Nenhum curso em andamento" : currentTitle.value;
});

const description = computed((): string => {
  return isDisabled.value
    ? "Não há progresso em nenhum curso ainda. Considere se inscrever em um."
    : currentDescription.value;
});

const linkText = computed((): string => {
  return isDisabled.value ? "Inscrever-se" : "Retomar curso";
});

const link = computed((): string => {
  let cL = currentLink.value;
  if (!currentLink) cL = "#retomar";
  return isDisabled.value ? "#inscrever" : cL;
});
</script>
