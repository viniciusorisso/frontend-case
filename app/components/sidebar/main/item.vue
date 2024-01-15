<template>
  <button
    type="button"
    class="flex gap-3 px-3 py-2 items-end"
    :class="{ 'bg-[#F6F8FA]': active }"
    @click="emit('activate')"
  >
    <span
      class="h-5 w-5 flex justify-center"
      :class="{ 'text-[#525866]': !active, 'text-[#0A0D14]': active }"
    >
      <slot name="image"></slot>
    </span>
    <p
      class="text-sm font-medium"
      :class="{ 'text-[#525866]': !active, 'text-[#0A0D14]': active }"
      v-if="!isCollapsed"
    >
      {{ text }}
    </p>
    <img
      v-if="active && !isCollapsed"
      class="ml-auto my-auto"
      src="@/assets/svg/seta-direita.svg"
      alt="Ícone seta para a direita"
    />
  </button>
</template>

<script lang="ts" setup>
const { text, active } = defineProps<{
  text: string;
  active: boolean;
}>();

const emit = defineEmits<{
  activate: [];
}>();

const { isCollapsed } = inject("collapse") as { isCollapsed: boolean };
</script>
