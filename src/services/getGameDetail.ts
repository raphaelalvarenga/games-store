import { fetchApi } from './fetchApi'

export async function getGameDetail(gameId: string) {
  return await fetchApi(`games/${gameId}`)
}
