<script setup lang="ts"></script>

<template>
  <main id="main">
    <div id="main-container">
      <RouterView />
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
