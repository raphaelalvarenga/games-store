import type { GamesResponseDTO } from '@/typings/interfaces'
import { fetchApi } from './fetchApi'

export async function getGames(page: number): Promise<GamesResponseDTO> {
  return await fetchApi('games', `page=${page}`)
}
