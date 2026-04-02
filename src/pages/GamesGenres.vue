<script setup lang="ts">
import { ref, watchEffect } from 'vue';
// import { genresResponseDto } from '../mocks'
import SimpleCard from '@/components/SimpleCard.vue'
import { getGenres } from '@/services/getGenres';
import type { GenresResponseDto } from '@/typings/interfaces';

// const { results: genres } = genresResponseDto
const genresResponseDto = ref<GenresResponseDto>()

watchEffect(async () => {
  genresResponseDto.value = await getGenres()
})

</script>

<template>
  <div class="genres-page">
    <h1 class="page-title">Browse Genres</h1>

    <div class="genres-grid">
      <SimpleCard v-for="genre in genresResponseDto?.results" :key="genre.id" :item="genre" />
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
