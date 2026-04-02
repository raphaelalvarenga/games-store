<script setup lang="ts">
import { ref, watchEffect } from 'vue';
// import { platformsResponseDto } from '../mocks'
import SimpleCard from '@/components/SimpleCard.vue';
import type { PlatformsResponseDto } from '@/typings/interfaces';
import { getPlatforms } from '@/services/getPlatforms';

// const { results: platforms } = platformsResponseDto
const platformsResponseDto = ref<PlatformsResponseDto>()

watchEffect(async () => {
  platformsResponseDto.value = await getPlatforms();
})
</script>

<template>
  <div class="platforms-page">
    <h1 class="page-title">Browse Platforms</h1>

    <div class="platforms-grid">
      <SimpleCard v-for="platform in platformsResponseDto?.results" :key="platform.id" :item="platform" />
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

@media (max-width: 768px) {
  .platforms-grid {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }
}
</style>
