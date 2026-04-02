import { fetchApi } from './fetchApi'

export async function getPlatforms() {
  return await fetchApi('platforms')
}
