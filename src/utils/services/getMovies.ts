import { Movies } from '@/interfaces/movies'

// <------------------>
// Para obtener las peliculas
export const getMovies = async () => {
  const MOVIES_URL = 'https://api.jikan.moe/v4/anime?'
  const QUERY_PARAMS = `&sfw&limit=24&type=movie&order_by=popularity&start_date=2020-01-01`

  const res = await fetch(`${MOVIES_URL}${QUERY_PARAMS}`)
  const data = (await res.json()) as Movies

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return data
}
