<script setup lang="ts">
import { searchGames } from '@/services/searchGames'
import { ref, watch } from 'vue'
import { useDebounceFn } from '@vueuse/core'
// import { useRouter } from 'vue-router'

const searchInput = ref('')

const searchGamesInputDebounce = useDebounceFn(searchGames, 800)

watch(searchInput, searchGamesInputDebounce)
</script>

<template>
  <header class="navbar">
    <div class="navbar-container">
      <RouterLink to="/" class="logo"> 🎮 GameStore </RouterLink>

      <nav class="nav-links">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/genres">Genres</RouterLink>
        <RouterLink to="/platforms">Platforms</RouterLink>
      </nav>

      <div class="search-box">
        <input v-model="searchInput" placeholder="Search games..." />
      </div>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  background: #030712;
  border-bottom: 1px solid #1f2937;
  position: sticky;
  top: 0;
  z-index: 50;
}

.navbar-container {
  max-width: 1200px;
  margin: auto;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-weight: 700;
  font-size: 18px;
  color: #f9fafb;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-links a {
  color: #9ca3af;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: #f9fafb;
}

.search-box input {
  background: #111827;
  border: 1px solid #1f2937;
  padding: 8px 12px;
  border-radius: 8px;
  color: #e5e7eb;
  outline: none;
  font-size: 13px;
  width: 180px;
}

.search-box input:focus {
  border-color: #374151;
}
</style>
