<script setup lang="ts">
import { gameResponseDto } from '../mocks'

const {
  name,
  background_image,
  background_image_additional,
  metacritic,
  released,
  website,
  rating,
  ratings,
  platforms,
  stores,
  developers,
  genres,
  tags,
  publishers,
  description,
} = gameResponseDto

function getPlatformNames() {
  return platforms.map((p) => p.platform.name).join(', ')
}

function getStoreNames() {
  return stores.map((s) => s.store.name).join(', ')
}

function getNames(list: { name: string }[]) {
  return list.map((item) => item.name).join(', ')
}
</script>

<template>
  <div class="game-page">
    <div class="hero">
      <img :src="background_image" class="hero__bg" />
      <div class="hero__overlay" />

      <div class="hero__content">
        <h1>{{ name }}</h1>

        <div class="hero__meta">
          <span class="rating">⭐ {{ rating }}</span>
          <span v-if="metacritic" class="metacritic">{{ metacritic }}</span>
          <span>{{ released }}</span>
        </div>

        <a :href="website" target="_blank" class="btn">Visit Website</a>
      </div>
    </div>

    <div class="content">
      <div class="content__main">
        <img :src="background_image_additional" class="secondary-image" />

        <div class="description" v-html="description"></div>
      </div>

      <div class="sidebar">
        <div class="card">
          <h3>Platforms</h3>
          <p>{{ getPlatformNames() }}</p>
        </div>

        <div class="card">
          <h3>Stores</h3>
          <p>{{ getStoreNames() }}</p>
        </div>

        <div class="card">
          <h3>Developers</h3>
          <p>{{ getNames(developers) }}</p>
        </div>

        <div class="card">
          <h3>Publishers</h3>
          <p>{{ getNames(publishers) }}</p>
        </div>

        <div class="card">
          <h3>Genres</h3>
          <p>{{ getNames(genres) }}</p>
        </div>

        <div class="card">
          <h3>Tags</h3>
          <p class="tags">
            <span v-for="tag in tags" :key="tag.id">{{ tag.name }}</span>
          </p>
        </div>
      </div>

      <div class="ratings-section">
        <h3>Player Ratings</h3>

        <div class="ratings-list">
          <div v-for="ratingItem in ratings" :key="ratingItem.id" class="rating-row">
            <div class="rating-row__label">
              {{ ratingItem.title }}
            </div>

            <div class="rating-row__bar">
              <div class="rating-row__fill" :style="{ width: ratingItem.percent + '%' }" />
            </div>

            <div class="rating-row__percent">{{ ratingItem.percent.toFixed(0) }}%</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.game-page {
  background: #0f172a;
  color: #e5e7eb;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
}

.hero {
  position: relative;
  height: 420px;
  overflow: hidden;
}

.hero__bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.05);
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, #0f172a 10%, rgba(15, 23, 42, 0.6) 50%, transparent 100%);
}

.hero__content {
  position: absolute;
  bottom: 30px;
  left: 40px;
}

.hero h1 {
  font-size: 2.2rem;
  margin-bottom: 10px;
}

.hero__meta {
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
  font-size: 0.9rem;
}

.rating {
  color: #facc15;
  font-weight: 600;
}

.metacritic {
  background: #22c55e;
  color: #020617;
  padding: 2px 6px;
  border-radius: 6px;
  font-weight: bold;
}

.btn {
  display: inline-block;
  padding: 8px 14px;
  background: #2563eb;
  border-radius: 8px;
  color: white;
  text-decoration: none;
  transition: background 0.2s;
}

.btn:hover {
  background: #1d4ed8;
}

.content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
  padding: 24px 40px;
}

.secondary-image {
  width: 100%;
  border-radius: 12px;
  margin-bottom: 16px;
}

.description {
  background: #111827;
  padding: 16px;
  border-radius: 12px;
  line-height: 1.6;
}

.sidebar {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.card {
  background: #111827;
  padding: 16px;
  border-radius: 12px;
}

.card h3 {
  margin-bottom: 8px;
  font-size: 0.95rem;
  color: #9ca3af;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tags span {
  background: #1f2933;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 0.75rem;
}

.ratings-section {
  background: #111827;
  padding: 16px;
  border-radius: 12px;
}

.ratings-section h3 {
  margin-bottom: 12px;
  font-size: 0.95rem;
  color: #9ca3af;
}

.ratings-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.rating-row {
  display: grid;
  grid-template-columns: 90px 1fr 50px;
  align-items: center;
  gap: 10px;
  font-size: 0.85rem;
}

.rating-row__label {
  text-transform: capitalize;
  color: #e5e7eb;
}

.rating-row__bar {
  background: #1f2937;
  height: 8px;
  border-radius: 999px;
  overflow: hidden;
}

.rating-row__fill {
  height: 100%;
  border-radius: 999px;
  transition: width 0.4s ease;
}

.rating-row:nth-child(1) .rating-row__fill {
  background: #22c55e;
}

.rating-row:nth-child(2) .rating-row__fill {
  background: #3b82f6;
}

.rating-row:nth-child(3) .rating-row__fill {
  background: #facc15;
}

.rating-row:nth-child(4) .rating-row__fill {
  background: #ef4444;
}

.rating-row__percent {
  text-align: right;
  color: #9ca3af;
}

@media (max-width: 900px) {
  .content {
    grid-template-columns: 1fr;
  }

  .hero__content {
    left: 20px;
    right: 20px;
  }

  .hero h1 {
    font-size: 1.6rem;
  }
}
</style>
