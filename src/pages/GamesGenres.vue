<script setup lang="ts">
import type { Genre, GamePreview } from '@/typings/interfaces'
import { genresResponseDto } from '../mocks'

const { results: genres } = genresResponseDto

function getTopGamesLabel(genre: Genre) {
  return genre.games.map((game: GamePreview) => game.name).join(', ')
}
</script>

<template>
  <div class="genres-page">
    <h1 class="page-title">Browse Genres</h1>

    <div class="genres-grid">
      <RouterLink
        v-for="genre in genres"
        :key="genre.id"
        class="genre-card"
        :to="`/genres/${genre.id}`"
      >
        <div class="genre-image">
          <img :src="genre.image_background" alt="genre-image" />
        </div>

        <div class="genre-content">
          <h2>{{ genre.name }}</h2>

          <div class="games-count">{{ genre.games_count.toLocaleString() }} games</div>

          <div class="top-games">
            {{ getTopGamesLabel(genre) }}
          </div>
        </div>
      </RouterLink>
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

.genre-card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  background: #111827;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.genre-card:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
}

.genre-image img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.genre-card:hover img {
  transform: scale(1.08);
}

.genre-content {
  position: absolute;
  inset: 0;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 2;
  color: #e5e7eb;
}

.genre-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.85) 20%,
    rgba(0, 0, 0, 0.3) 60%,
    transparent 100%
  );
  z-index: 1;
}

.genre-content h2 {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 4px;
}

.games-count {
  font-size: 12px;
  color: #9ca3af;
  margin-bottom: 6px;
}

.top-games {
  font-size: 12px;
  color: #d1d5db;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .genres-grid {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }

  .genre-image img {
    height: 140px;
  }
}
</style>
