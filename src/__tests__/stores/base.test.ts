import { createPinia, setActivePinia } from 'pinia'
import { describe, it, expect, beforeEach } from 'vitest'
import { useBaseStore } from '../../stores/base'

describe('Base store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should have isLoading as false and theme as dark initially', () => {
    const { isLoading, theme } = useBaseStore()
    expect(isLoading).toBeFalsy()
    expect(theme).toEqual('dark')
  })

  it('should set isLoading to true and theme as light', () => {
    const baseStore = useBaseStore()
    baseStore.setIsLoading(true)
    baseStore.setTheme('light')

    expect(baseStore.isLoadingValue).toBeTruthy()
    expect(baseStore.themeValue).toEqual('light')
  })
})
