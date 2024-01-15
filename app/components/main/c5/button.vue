<template>
  <button
    class="w-full rounded-lg border h-9 p-2 text-sm text-[#525866] font-medium"
    type="button"
    @click="emit('clicked')"
  >
    Enviar
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  clicked: [];
}>();
</script>
