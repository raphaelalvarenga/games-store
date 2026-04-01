<script setup lang="ts">
import { gamesResponseDto } from './mocks'
import type { Game } from './typings/interfaces'

const { results: games } = gamesResponseDto

function getGenresLabel(game: Game) {
  const genresNames = game.genres.map((genre) => genre.name)
  return genresNames.join('/')
}
</script>

<template>
  <div class="game-grid-items">
    <div v-for="game in games" :key="game.id" class="game-grid-item">
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
    </div>
  </div>
</template>

<style scoped>
.game-grid-items {
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: space-between;
  gap: 100px;
}

.game-grid-item {
  max-width: 300px;
}

.game-grid-items img {
  max-width: 300px;
}
</style>
