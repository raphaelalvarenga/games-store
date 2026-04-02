import { fetchApi } from './fetchApi'

export async function getGames() {
  return await fetchApi('games')
}
