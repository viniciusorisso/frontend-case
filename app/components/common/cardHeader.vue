<template>
  <div class="flex justify-between gap-x-1 gap-y-2 flex-wrap lg:flex-nowrap">
    <span class="flex gap-x-2 justify-center items-center">
      <slot name="icon"></slot>
      <p class="font-medium text-sm xl:text-base text-[#0A0D14] leading-5">
        {{ title }}
      </p>
    </span>
    <button
      v-if="buttonIcon || buttonText"
      class="flex p-2 gap-x-2 justify-center items-center font-medium text-xs xl:text-sm text-[#525866] border rounded-lg"
      style="border-color: #e2e4e9"
      @click="handleClick()"
    >
      <slot name="buttonIcon"></slot>
      <p class="lg:hidden xl:block">{{ buttonText }}</p>
    </button>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  clicked: [];
}>();

const { title, buttonIcon, buttonText } = defineProps<{
  title: string;
  buttonText?: string;
  buttonIcon?: string;
}>();

const handleClick = () => {
  emit("clicked");
};
</script>
