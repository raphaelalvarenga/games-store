import { fetchApi } from './fetchApi'

export async function searchGames(inputValue: string) {
  return await fetchApi('games', `search=${inputValue}`)
}
