import { Animes } from '@/interfaces/animes'
import { AnimeByID } from '@/interfaces/animesById'
import { Characters } from '@/interfaces/characters'

const CONFIG = {
  LIMIT: '24',
  TYPE: 'tv',
  ORDER_BY: 'popularity',
  START_DATE: '2020-01-01'
}

export const getAnimes = async () => {
  const ANIMES_URL = 'https://api.jikan.moe/v4/anime?'
  const QUERY_PARAMS = `&sfw&limit=${CONFIG.LIMIT}&type=${CONFIG.TYPE}&order_by=${CONFIG.ORDER_BY}&start_date=${CONFIG.START_DATE}`

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

// Obtener los personajes
export const getCharacters = async (id: number) => {
  const ANIME_CHARACTER_URL = `https://api.jikan.moe/v4/anime/${id}/characters`

  const res = await fetch(ANIME_CHARACTER_URL)
  const data = (await res.json()) as Characters

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return data
}

// Buscar los animes
export const searchAnimes = async (name: string) => {
  const SEARCH_CHARACTER_URL = `https://api.jikan.moe/v4/anime?q=${name}`
  const QUERY_PARAMS = `&sfw&limit=${CONFIG.LIMIT}&type=${CONFIG.TYPE}&order_by=${CONFIG.ORDER_BY}`

  const res = await fetch(`${SEARCH_CHARACTER_URL}${QUERY_PARAMS}`)
  const data = (await res.json()) as Animes

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return data
}

// Obtener los animes por estado
export const statusAnimes = async (status: string) => {
  const STATUS_ANIMES_URL = 'https://api.jikan.moe/v4/anime?'
  const QUERY_PARAMS = `&sfw&limit=${CONFIG.LIMIT}&type=${CONFIG.TYPE}&order_by=${CONFIG.ORDER_BY}&status=${status}`

  const res = await fetch(`${STATUS_ANIMES_URL}${QUERY_PARAMS}`)
  const data = (await res.json()) as Animes

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  // throw new Error('Failed to fetch data. Try Again')
  return data
}
