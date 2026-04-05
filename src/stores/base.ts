import { acceptHMRUpdate, defineStore } from 'pinia'

export const useBaseStore = defineStore('base', {
  state: () => ({
    isLoading: false,
    theme: 'dark',
  }),

  getters: {
    isLoadingValue: (state) => {
      console.log(state.isLoading)
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

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBaseStore, import.meta.hot))
}
