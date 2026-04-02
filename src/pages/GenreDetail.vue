<script setup lang="ts">
import { genreDetailResponseDto } from '../mocks'

const { name, games_count, image_background, description } = genreDetailResponseDto
</script>

<template>
  <div class="genre-detail-page">
    <div class="genre-hero">
      <img :src="image_background" />

      <div class="hero-overlay">
        <div class="hero-content">
          <h1>{{ name }}</h1>
          <div class="games-count">{{ games_count }} games</div>
        </div>
      </div>
    </div>

    <div class="genre-content">
      <div class="description" v-html="description"></div>
    </div>
  </div>
</template>

<style scoped>
.genre-detail-page {
  color: #e5e7eb;
  font-family: 'Inter', sans-serif;
}

/* HERO */
.genre-hero {
  position: relative;
  height: 320px;
  overflow: hidden;
}

.genre-hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* overlay */
.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(3, 7, 18, 0.95) 10%,
    rgba(3, 7, 18, 0.6) 50%,
    rgba(3, 7, 18, 0.2) 100%
  );
  display: flex;
  align-items: flex-end;
}

.hero-content {
  padding: 24px;
}

.hero-content h1 {
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 6px;
}

.games-count {
  font-size: 14px;
  color: #9ca3af;
}

/* CONTENT */
.genre-content {
  max-width: 900px;
  margin: auto;
  padding: 32px 24px;
}

.description {
  font-size: 14px;
  line-height: 1.7;
  color: #d1d5db;
}

.description p {
  margin-bottom: 16px;
}

/* MOBILE */
@media (max-width: 768px) {
  .genre-hero {
    height: 240px;
  }

  .hero-content h1 {
    font-size: 24px;
  }

  .genre-content {
    padding: 24px 16px;
  }
}
</style>
