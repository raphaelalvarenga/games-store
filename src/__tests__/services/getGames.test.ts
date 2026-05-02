import { describe, it, expect, vi } from 'vitest'
import { getGames } from '../../services/getGames'
import { gamesResponseDto } from '../../mocks/games'

vi.mock(import('../../services/fetchApi'), () => {
  return {
    fetchApi: vi.fn(() => {
      const gamesResponse = gamesResponseDto
      return gamesResponse
    }),
  }
})

describe('getGames', () => {
  it('should get games', async () => {
    const games = await await getGames(1)
    expect(games).toBeDefined()
  })
})
