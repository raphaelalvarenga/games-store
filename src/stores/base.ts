import { acceptHMRUpdate, defineStore } from 'pinia'

export const useBaseStore = defineStore('base', {
  state: () => ({
    isLoading: false,
    theme: 'dark',
  }),

  getters: {
    isLoadingValue: (state) => {
      return state.isLoading
    },
    themeValue: (state) => state.theme,
  },

  actions: {
    setIsLoading(value: boolean) {
      this.isLoading = value
    },
    setTheme(value: 'light' | 'dark') {
      this.theme = value
    },
  },
})

// c8 ignore start
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBaseStore, import.meta.hot))
}
// c8 ignore end
