<template>
  <div class="flex gap-x-4">
    <div class="flex gap-x-2 items-center justify-center">
      <CommonColoredCircle
        color="#F2AE40"
        :isCollapsed="false"
        :disabled="isDisabled"
      />
      <p
        class="text-xs text-[#525866]"
        :class="{ 'text-[#CDD0D5]': isDisabled }"
      >
        Descanso
      </p>
    </div>
    <div class="flex gap-x-2 items-center justify-center">
      <CommonColoredCircle
        color="#35B9E9"
        :isCollapsed="false"
        :disabled="isDisabled"
      />
      <p
        class="text-xs text-[#525866]"
        :class="{ 'text-[#CDD0D5]': isDisabled }"
      >
        Ativo
      </p>
    </div>
    <div class="flex gap-x-2 items-center justify-center">
      <CommonColoredCircle
        color="#6E3FF3"
        :isCollapsed="false"
        :disabled="isDisabled"
      />
      <p
        class="text-xs text-[#525866]"
        :class="{ 'text-[#CDD0D5]': isDisabled }"
      >
        Hora Extra
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  disabled: boolean;
}>();

const isDisabled = toRef(props, "disabled");
</script>
