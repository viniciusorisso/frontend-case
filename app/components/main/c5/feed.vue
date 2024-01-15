<template>
  <div class="w-full flex flex-col">
    <div
      class="flex border rounded-t-xl overflow-hidden"
      style="border-color: #e2e4e9"
    >
      <button
        type="button"
        v-for="(emoji, index) in list"
        class="border-r p-4 w-full flex items-center justify-center"
        style="border-color: #e2e4e9"
        :class="{
          'bg-[#F6F8FA]': index === currentEmoji,
        }"
        @click="setEmoji(index)"
      >
        {{ emoji }}
      </button>
    </div>
    <textarea
      type="text"
      class="p-3 text-sm text-[#868C98] border rounded-b-xl overflow-hidden"
      style="border-color: #e2e4e9"
      placeholder="Adicionar comentário"
    ></textarea>
  </div>
</template>

<script lang="ts" setup>
const list = ["😔", "😕", "😐", "🙂", "😄"];
const currentEmoji = ref<number>();

const setEmoji = (index: number): void => {
  if (currentEmoji.value === index) {
    currentEmoji.value = undefined;

    return;
  }
  currentEmoji.value = index;
};
</script>
