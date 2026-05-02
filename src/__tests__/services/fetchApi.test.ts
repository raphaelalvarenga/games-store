import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { fetchApi } from '../../services/fetchApi'
import { GamesResponseDTO } from '../../typings/interfaces'

describe('Fetch API', () => {
  it('should make an API request', async () => {
    const games = await fetchApi('games')
    expect(games).toHaveLength(0)
  })
})
