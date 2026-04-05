import type { Game } from '@/typings/interfaces'
import { acceptHMRUpdate, defineStore } from 'pinia'

export const useGamesStore = defineStore('games', {
  state: (): { rawItems: Game[] } => ({
    rawItems: [],
  }),
  getters: {
    games: (state) => state.rawItems,
  },
  actions: {
    addGames(games: Game[]) {
      console.log('executed action')
      this.rawItems = games
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGamesStore, import.meta.hot))
}
