import { fetchApi } from "./fetchApi";

export async function getGenres() {
  return await fetchApi("genres")
}