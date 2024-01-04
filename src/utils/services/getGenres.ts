import { Animes } from '@/interfaces/animes'
import { Genres } from '@/interfaces/genres'

// Para obtener todos los generos
export const getGenres = async () => {
  const GENRES = 'https://api.jikan.moe/v4/genres/anime'

  const res = await fetch(GENRES)
  const data = (await res.json()) as Genres

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return data
}

// Para obtener todos los generos por ID
export const getGenresId = async (id: string) => {
  const GENRES = 'https://api.jikan.moe/v4/anime?'
  const QUERY_PARAMS = `sfw&limit=24&type=tv&genres=${id}&start_date=2015-01-01`

  const res = await fetch(`${GENRES}${QUERY_PARAMS}`)
  const data = (await res.json()) as Animes

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return data
}