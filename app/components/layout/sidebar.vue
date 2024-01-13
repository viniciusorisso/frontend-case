<template>
  <nav class="bg-purple-200 sidebar"></nav>
</template>

<style scoped>
.sidebar {
  grid-area: side;
}
@media (max-width: 925px) {
  .sidebar {
    display: none;
  }
}
</style>
