<template>
  <main class="bg-blue-200 main">
    <component
      v-for="(card, index) in cardsList"
      :is="card"
      :style="{ 'grid-area': `c${index}` }"
      class="card bg-red-400"
    />
  </main>
</template>

<script setup>
const cardsList = []
const c0 = resolveComponent('DashboardCard')
const c1 = resolveComponent('DashboardCard')
const c2 = resolveComponent('DashboardCard')
const c3 = resolveComponent('DashboardCard')
const c4 = resolveComponent('DashboardCard')
const c5 = resolveComponent('DashboardCard')

cardsList.push(c0, c1, c2, c3, c4, c5)
</script>

<style scoped>
.main {
  grid-area: main;
  padding: 25px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-areas:
    'c0 c1 c2'
    'c0 c3 c2'
    'c4 c4 c5'
    'c4 c4 c5';
  gap: 20px;
}

.card {
  border-radius: 10px;
}

@media (max-width: 925px) {
  .main {
    grid-template-columns: 1fr;
    grid-template-rows: 360px 180px 180px 360px 360px 360px;
    grid-template-areas: initial;
  }

  .card {
    grid-area: initial !important;
  }
}
</style>
