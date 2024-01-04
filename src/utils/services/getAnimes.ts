import { Animes } from '@/interfaces/animes'
import { AnimeByID } from '@/interfaces/animesById'
import { Characters } from '@/interfaces/characters'

// <------------------>
export const getAnimes = async (page: string = '1') => {
  const ANIMES_URL = 'https://api.jikan.moe/v4/anime?'
  const QUERY_PARAMS = `&sfw&limit=24&type=tv&status=upcoming&page=${page}`

  const res = await fetch(`${ANIMES_URL}${QUERY_PARAMS}`)
  const data = (await res.json()) as Animes

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return data
}

// <------------------>
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
export const searchAnimes = async (name: string, page: string = '1') => {
  const SEARCH_CHARACTER_URL = `https://api.jikan.moe/v4/anime?q=${name}`
  const QUERY_PARAMS = `&sfw&limit=24&type=tv&order_by=title`

  const res = await fetch(`${SEARCH_CHARACTER_URL}${QUERY_PARAMS}`)
  const data = (await res.json()) as Animes

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return data
}

// <------------------>
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
