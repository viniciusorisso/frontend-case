<template>
  <main class="bg-[#FFFFFF] main overflow-scroll">
    <component
      v-for="(card, index) in cardsList.slice(0, 6)"
      :is="card"
      :style="{ 'grid-area': `c${index}` }"
      class="card border rounded-2xl"
    />
  </main>
</template>

<script setup>
const cardsList = ref([]);
let s0 = markRaw(resolveComponent("Skeleton"));
let s1 = markRaw(resolveComponent("Skeleton"));
let s2 = markRaw(resolveComponent("Skeleton"));
let s3 = markRaw(resolveComponent("Skeleton"));
let s4 = markRaw(resolveComponent("Skeleton"));
let s5 = markRaw(resolveComponent("Skeleton"));
const c0 = resolveComponent("MainC1");
const c1 = resolveComponent("MainC2");
const c2 = resolveComponent("MainC3");
const c3 = resolveComponent("MainC4");
const c4 = resolveComponent("MainC5");
const c5 = resolveComponent("MainC6");
cardsList.value.push(s0, s1, s2, s3, s4, s5, c0, c1, c2, c3, c4, c5);

onMounted(async () => {
  setTimeout(() => {
    cardsList.value = cardsList.value.slice(6, 12);

    s0 = null;
    s1 = null;
    s2 = null;
    s3 = null;
    s4 = null;
    s5 = null;
  }, 2000);
});
</script>

<style scoped>
.main {
  grid-area: main;
  padding: 25px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-areas:
    "c0 c1 c5"
    "c0 c2 c5"
    "c3 c3 c4"
    "c3 c3 c4";
  gap: 20px;
}

.card {
  border-radius: 10px;
}

@media (max-width: 1024px) {
  .main {
    grid-template-columns: 1fr;
    grid-template-rows: 360px 180px 360px 360px 360px 360px;
    grid-template-areas: initial;
  }

  .card {
    grid-area: initial !important;
  }
}
</style>
