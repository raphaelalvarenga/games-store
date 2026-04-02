import { fetchApi } from './fetchApi'

export async function getGames(page: number) {
  return await fetchApi('games', `page=${page}`)
}
