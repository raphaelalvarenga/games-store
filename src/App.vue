<script setup lang="ts">
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
</script>

<template>
  <main id="main">
    <div id="main-container">
      <AppHeader />
      <RouterView />
      <AppFooter />
    </div>
  </main>
</template>

<style scoped>
#main {
  background: #0f172a;
}

#main-container {
  max-width: 1200px;
  margin: auto;
}
</style>
