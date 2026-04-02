<script setup lang="ts">
import { platformResponseDto } from '../mocks'
const { description, games_count, image_background, name } = platformResponseDto
</script>

<template>
  <div class="platform-detail-page">
    <div class="platform-hero">
      <img :src="image_background" />
      <div class="hero-overlay">
        <div class="hero-content">
          <h1>{{ name }}</h1>
          <div class="games-count">{{ games_count.toLocaleString() }} games</div>
        </div>
      </div>
    </div>

    <div class="platform-content">
      <div class="description" v-html="description"></div>
    </div>
  </div>
</template>

<style scoped>
.platform-detail-page {
  color: #e5e7eb;
  font-family: 'Inter', sans-serif;
}

.platform-hero {
  position: relative;
  height: 320px;
  overflow: hidden;
}

.platform-hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

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

.platform-content {
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

@media (max-width: 768px) {
  .platform-hero {
    height: 240px;
  }

  .hero-content h1 {
    font-size: 24px;
  }

  .platform-content {
    padding: 24px 16px;
  }
}
</style>
