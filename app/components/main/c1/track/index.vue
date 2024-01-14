<template>
  <div class="flex flex-col">
    <button
      type="button"
      @click.native="collapseTrack()"
      class="bg-[#E2E4E9] border rounded-t-lg overflow-hidden flex gap-x-2 px-3 py-2 items-center"
    >
      <img src="@/assets/svg/track.svg" />
      <p class="text-[#525866] text-sm">Track App</p>
      <img class="ml-auto h-5 w-5" src="@/assets/svg/seta-baixo.svg" alt="" />
    </button>
    <MainC1TrackTimer
      @new-time="createNewTime"
      @clear-time="emit('clearTime')"
    />
  </div>
</template>

<script lang="ts" setup>
const isCollapsed = ref(false);

const collapseTrack = (): void => {
  isCollapsed.value = !isCollapsed.value;
};

const emit = defineEmits<{
  newTime: [userTime: string];
  clearTime: [];
}>();

const createNewTime = (newTime: string) => {
  emit("newTime", newTime);
};
</script>
