<template>
  <div class="flex justify-between gap-x-1 gap-y-2 flex-wrap lg:flex-nowrap">
    <span
      class="flex gap-x-2 justify-center items-center w-min-[70%] w-max-[100%]"
    >
      <slot name="icon"></slot>
      <p class="font-medium text-sm xl:text-base text-[#0A0D14] leading-5">
        {{ title }}
      </p>
    </span>
    <button
      v-if="buttonText && !disabled"
      class="flex p-2 gap-x-2 justify-center items-center font-medium text-xs xl:text-sm text-[#525866] border rounded-lg"
      style="border-color: #e2e4e9"
      @click="handleClick()"
    >
      <slot name="buttonIcon"></slot>
      <p class="xl:block">{{ buttonText }}</p>
    </button>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  clicked: [];
}>();

const { title, buttonText } = defineProps<{
  title: string;
  buttonText?: string;
  disabled?: boolean;
}>();

const handleClick = () => {
  emit("clicked");
};
</script>
