import { createPinia, setActivePinia } from 'pinia'
import { describe, it, expect, beforeEach } from 'vitest'
import { useGamesStore } from '../../stores/games'
import { gamesResponseDto } from '../../mocks/games'

describe('Games store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should start empty', () => {
    const gamesStore = useGamesStore()
    expect(gamesStore.rawItems).toHaveLength(0)
  })

  it('should update store with a list of games', () => {
    const gamesStore = useGamesStore()

    gamesStore.addGames(gamesResponseDto.results)

    expect(gamesStore.gamesValue).not.toHaveLength(0)
  })
})
