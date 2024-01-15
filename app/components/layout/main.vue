<template>
  <main class="bg-blue-200 main overflow-scroll">
    <component
      v-for="(card, index) in cardsList"
      :is="card"
      :style="{ 'grid-area': `c${index}` }"
      class="card"
    />
  </main>
</template>

<script setup>
const cardsList = [];
const c0 = resolveComponent("MainC1");
const c1 = resolveComponent("MainC2");
const c2 = resolveComponent("MainC3");
const c3 = resolveComponent("MainC4");
const c4 = resolveComponent("MainC5");
const c5 = resolveComponent("MainC6");

cardsList.push(c0, c1, c2, c3, c4, c5);
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
