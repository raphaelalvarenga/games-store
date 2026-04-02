import GameDetails from '@/pages/GameDetails.vue'
import GamesGenres from '@/pages/GamesGenres.vue'
import GenreDetail from '@/pages/GenreDetail.vue'
import HomePage from '@/pages/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: HomePage },
  { path: '/game-details/:id', component: GameDetails },
  { path: '/genres', component: GamesGenres },
  { path: '/genres/:id', component: GenreDetail },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
