<script setup lang="ts">
import { onMounted, ref } from 'vue'
// import { gamesResponseDto } from '../mocks'
// import { gamesResponseDto } from '../mocks'
import { type Game, type GamesResponseDTO } from '../typings/interfaces'
import { getGames } from '@/services/getGames'
// const { results: games } = gamesResponseDto
const gamesResponseDto = ref<GamesResponseDTO>()
const games = ref<Game[]>([])
const isFetchingMoreGames = ref<boolean>(false)

async function fetchGames(nextPage: number) {
  isFetchingMoreGames.value = true
  gamesResponseDto.value = await getGames(nextPage)

  if (gamesResponseDto.value?.results) {
    gamesResponseDto.value.results
    games.value = [...games.value, ...gamesResponseDto.value.results]
    isFetchingMoreGames.value = false
  }
}

onMounted(async () => {
  fetchGames(1)
})

async function loadMoreItems() {
  if (gamesResponseDto.value?.next) {
    const nextPage = gamesResponseDto.value.next.split('page=')[1] as string
    await fetchGames(parseInt(nextPage))
  }
}
</script>

<template>
  <div class="game-grid-items">
    <RouterLink
      v-for="game in games"
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
            {{ game.genres.map((genre) => genre.name).join('/') }}
          </div>

          <div>Rating: {{ game.rating }}</div>
        </div>
      </div>
    </RouterLink>
  </div>

  <div class="load-more-container">
    <button v-if="!isFetchingMoreGames" class="load-more-btn" @click="loadMoreItems">
      Load more games
    </button>

    <span v-else class="load-more-spn">Loading...</span>
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

.load-more-container {
  grid-column: 1 / -1; /* makes it span full grid width */
  display: flex;
  justify-content: center;
  margin-top: 16px;
}

.load-more-btn {
  background: #1f2937;
  color: #e5e7eb;
  border: 1px solid #374151;
  padding: 12px 20px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s ease;
}

.load-more-btn:hover {
  background: #374151;
  border-color: #4b5563;
  transform: translateY(-2px);
}

.load-more-btn:active {
  transform: translateY(0);
}

.load-more-spn {
  color: #e5e7eb;
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
