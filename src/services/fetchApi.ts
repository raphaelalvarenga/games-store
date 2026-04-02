const { VITE_API_URL: apiUrl, VITE_API_KEY: apiKey } = import.meta.env

export async function fetchApi(uri: 'games' | 'genres' | 'platforms') {
  const fetchResponse = await fetch(`${apiUrl}/${uri}?key=${apiKey}`)
  return await fetchResponse.json()
}
