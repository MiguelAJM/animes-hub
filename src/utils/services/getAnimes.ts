import { Animes } from '@/interfaces/animes'
import { AnimeByID } from '@/interfaces/animesById'
import { Characters } from '@/interfaces/characters'

// <------------------>
// Para obtener los animes
export const getAnimes = async (page: string = '1') => {
  const ANIMES_URL = 'https://api.jikan.moe/v4/anime?'
  const QUERY_PARAMS = `&sfw&limit=24&type=tv&status=upcoming&start_date=2015-01-01&page=${page}`

  const res = await fetch(`${ANIMES_URL}${QUERY_PARAMS}`)
  const data = (await res.json()) as Animes

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return data
}

// <------------------>
// Para obtener el anime por ID
export const getAnimesById = async (id: string) => {
  const ANIME_BY_ID_URL = 'https://api.jikan.moe/v4/anime/'

  const res = await fetch(`${ANIME_BY_ID_URL}${id}`)
  const data = (await res.json()) as AnimeByID

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return data
}

// <------------------>
// Para obtener los personajes del anime
export const getCharacters = async (id: number) => {
  const ANIME_CHARACTER_URL = `https://api.jikan.moe/v4/anime/${id}/characters`

  const res = await fetch(ANIME_CHARACTER_URL)
  const data = (await res.json()) as Characters

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return data
}

// <------------------>
// Para buscar el anime
export const searchAnimes = async (name: string) => {
  const SEARCH_CHARACTER_URL = `https://api.jikan.moe/v4/anime?q=${name}`
  const QUERY_PARAMS = `&sfw&limit=24&type=tv&order_by=title`

  const res = await fetch(`${SEARCH_CHARACTER_URL}${QUERY_PARAMS}`)
  const data = (await res.json()) as Animes

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return data
}

// Para obtener el anime segun el estado (airing, upcoming, complete)
export const statusAnimes = async (status: string) => {
  const STATUS_ANIMES_URL = 'https://api.jikan.moe/v4/anime?'
  const QUERY_PARAMS = `&sfw&limit=24&status=upcoming&order_by=popularity&status=${status}`

  const res = await fetch(`${STATUS_ANIMES_URL}${QUERY_PARAMS}`)
  const data = (await res.json()) as Animes

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return data
}
