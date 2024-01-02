import { Animes } from '@/interfaces/animes'
import { AnimeByID } from '@/interfaces/animesById'
import { Characters } from '@/interfaces/characters'

export const getAnimes = async () => {
  const ANIMES_URL = 'https://api.jikan.moe/v4/anime?'
  const QUERY_PARAMS =
    '&sfw&limit=20&type=tv&order_by=popularity&status=airing&start_date=2022-01-01'

  const res = await fetch(`${ANIMES_URL}${QUERY_PARAMS}`)
  const data = (await res.json()) as Animes

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  // throw new Error('Failed to fetch data. Try Again')
  return data
}

export const getAnimesById = async (id: string) => {
  const ANIME_BY_ID_URL = 'https://api.jikan.moe/v4/anime/'

  const res = await fetch(`${ANIME_BY_ID_URL}${id}`)
  const data = (await res.json()) as AnimeByID

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  // throw new Error('Failed to fetch data. Try Again')
  return data
}

export const getCharacters = async (id: number) => {
  const ANIME_CHARACTER_URL = `https://api.jikan.moe/v4/anime/${id}/characters`

  const res = await fetch(ANIME_CHARACTER_URL)
  const data = (await res.json()) as Characters

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return data
}

export const searchCharacters = async (name: string) => {
  const ANIME_CHARACTER_URL = `https://api.jikan.moe/v4/anime?q=${name}`
  const QUERY_PARAMS =
    '&sfw&limit=20&type=tv&order_by=popularity'

  const res = await fetch(`${ANIME_CHARACTER_URL}${QUERY_PARAMS}`)
  const data = (await res.json()) as Animes

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return data
}
