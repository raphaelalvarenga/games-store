import type { Game } from '@/typings/interfaces'
import { acceptHMRUpdate, defineStore } from 'pinia'

export const useGamesStore = defineStore('games', {
  state: (): { rawItems: Game[] } => ({
    rawItems: [],
  }),
  getters: {
    gamesValue: (state) => state.rawItems,
  },
  actions: {
    addGames(games: Game[]) {
      console.log('executed action')
      this.rawItems = games
    },
  },
})

// c8 ignore start
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGamesStore, import.meta.hot))
}
// c8 ignore end
