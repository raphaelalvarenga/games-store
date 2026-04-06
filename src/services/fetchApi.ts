const { VITE_API_URL: apiUrl, VITE_API_KEY: apiKey } = import.meta.env

export async function fetchApi(uri: string, queryParams: string = '') {
  const fetchResponse = await fetch(`${apiUrl}/${uri}?key=${apiKey}&${queryParams}`)
  return await fetchResponse.json()
}
