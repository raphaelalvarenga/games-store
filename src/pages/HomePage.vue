<script setup lang="ts">
import { ref, watchEffect } from 'vue'
// import { gamesResponseDto } from '../mocks'
// import { gamesResponseDto } from '../mocks'
import type { GamesResponseDTO, Game } from '../typings/interfaces'
import { getGames } from '@/services/getGames'
// const { results: games } = gamesResponseDto
const gamesResponseDto = ref<GamesResponseDTO>()

function getGenresLabel(game: Game) {
  const genresNames = game.genres.map((genre) => genre.name)
  return genresNames.join('/')
}

watchEffect(async () => {
  gamesResponseDto.value = await getGames()
})
</script>

<template>
  <div class="game-grid-items">
    <RouterLink
      v-for="game in gamesResponseDto?.results"
      :key="game.id"
      class="game-grid-item"
      :to="`/game-details/${game.id}`"
    >
      <div>
        <div><img :src="game.background_image" alt="imagem-do-game" /></div>
        <div>
          <div>
            {{ game.name }}
          </div>
          <div>
            {{ getGenresLabel(game) }}
          </div>

          <div>Rating: {{ game.rating }}</div>
        </div>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped>
.game-grid-items {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 24px;
  padding: 24px;
}

.game-grid-item {
  background: #111827;
  border-radius: 12px;
  overflow: hidden;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
  cursor: pointer;
  position: relative;
  display: block;
}

.game-grid-item:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
}

.game-grid-item img {
  width: 100%;
  height: 260px;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.game-grid-item:hover img {
  transform: scale(1.08);
}

.game-grid-item > div {
  position: relative;
}

.game-grid-item > div::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.85) 10%,
    rgba(0, 0, 0, 0.2) 60%,
    transparent 100%
  );
  pointer-events: none;
}

.game-grid-item > div > div:last-child {
  position: absolute;
  bottom: 0;
  padding: 12px;
  width: 100%;
  z-index: 2;
  color: #e5e7eb;
  font-family: 'Inter', sans-serif;
}

.game-grid-item > div > div:last-child > div:first-child {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
  line-height: 1.3;
}

.game-grid-item > div > div:last-child > div:nth-child(2) {
  font-size: 12px;
  color: #9ca3af;
  margin-bottom: 6px;
}

.game-grid-item > div > div:last-child > div:last-child {
  font-size: 12px;
  color: #facc15;
  font-weight: 600;
}

@media (max-width: 768px) {
  .game-grid-items {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }

  .game-grid-item img {
    height: 200px;
  }
}
</style>
