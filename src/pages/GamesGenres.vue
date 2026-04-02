<script setup lang="ts">
import { genresResponseDto } from '../mocks'
import SimpleCard from '@/components/SimpleCard.vue'

const { results: genres } = genresResponseDto

</script>

<template>
  <div class="genres-page">
    <h1 class="page-title">Browse Genres</h1>

    <div class="genres-grid">
      <SimpleCard v-for="genre in genres" :key="genre.id" :item="genre" />
    </div>
  </div>
</template>

<style scoped>
.genres-page {
  padding: 24px;
}

.page-title {
  color: #f9fafb;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
  font-family: 'Inter', sans-serif;
}

.genres-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;
}

@media (max-width: 768px) {
  .genres-grid {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }
}
</style>
