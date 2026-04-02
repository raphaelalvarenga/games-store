<script setup lang="ts">
import type { Genre, Platform } from '@/typings/interfaces';

interface SimpleCardProps {
  item: Platform | Genre
}

  const {item} = defineProps<SimpleCardProps>()
    const {games,games_count,id,image_background,name,} = item

</script>

<template>
      <RouterLink
        class="card"
        :to="`/platforms/${id}`"
      >
        <div class="image-container">
          <img :src="image_background" alt="card-image" />
        </div>

        <div class="card-content">
          <h2>{{ name }}</h2>
          <div class="games-count">{{ games_count }} games</div>

          <div class="top-games">{{ games.map((game) => game.name).join(', ') }}</div>
        </div>
      </RouterLink>
</template>

<style scoped>
.card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  background: #111827;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.card:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
}

.image-container img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.card:hover img {
  transform: scale(1.08);
}

.card-content {
  position: absolute;
  inset: 0;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 2;
  color: #e5e7eb;
}

.card::after {
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

.card-content h2 {
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

  .image-container img {
    height: 140px;
  }
}
</style>
