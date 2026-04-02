<script setup lang="ts">
import { platformsResponseDto } from '../mocks'

const { results: platforms } = platformsResponseDto
</script>

<template>
  <div class="platforms-page">
    <h1 class="page-title">Browse Platforms</h1>

    <div class="platforms-grid">
      <RouterLink
        v-for="{ image_background, games, games_count, id, name } in platforms"
        :key="id"
        class="platform-card"
        :to="`/platforms/${id}`"
      >
        <div class="platform-image">
          <img :src="image_background" alt="platform-image" />
        </div>

        <div class="platform-content">
          <h2>{{ name }}</h2>
          <div class="games-count">{{ games_count }} games</div>

          <div class="top-games">{{ games.map((game) => game.name).join(', ') }}</div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.platforms-page {
  padding: 24px;
  color: #e5e7eb;
  font-family: 'Inter', sans-serif;
}

.page-title {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
}

.platforms-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;
}

.platform-card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  background: #111827;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.platform-card:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
}

.platform-image img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.platform-card:hover img {
  transform: scale(1.08);
}

.platform-content {
  position: absolute;
  inset: 0;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 2;
  color: #e5e7eb;
}

.platform-card::after {
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

.platform-content h2 {
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
  .platforms-grid {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }

  .platform-image img {
    height: 140px;
  }
}
</style>
