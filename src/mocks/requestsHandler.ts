import { http, HttpResponse } from 'msw'

export const requestsHandlers = [
  http.get('https://api.rawg.io/api/games?key=bbc73c5f258741c1bfa18b43e386174c', () => {
    return HttpResponse.json([])
  }),
]
