'use server'

import CardAnime from '@/components/characters/CardAnime'
import { Animes } from '@/interfaces/animes'

export const getAnimesAction = async (page: number) => {
  const ANIMES_URL = 'https://api.jikan.moe/v4/anime?'
  const QUERY_PARAMS = `sfw&limit=24&type=tv&order_by=popularity&page=${page}`

  const res = await fetch(ANIMES_URL + QUERY_PARAMS)
  const animes = (await res.json()) as Animes

  if (!res.ok) {
    throw new Error('Failed to fetch animes')
  }

  return animes.data.map((item, index) => (
    <CardAnime key={item.mal_id} item={item} index={index} />
  ))
}

export const getAnimeSearchAction = async (name: string, page: number) => {
  const SEARCH_CHARACTER_URL = `https://api.jikan.moe/v4/anime?q=${name}`
  const QUERY_PARAMS = `&sfw&limit=24&type=tv&order_by=popularity&page=${page}`

  const res = await fetch(SEARCH_CHARACTER_URL + QUERY_PARAMS)
  const animes = (await res.json()) as Animes

  if (!res.ok) {
    throw new Error('Failed to fetch animes')
  }

  return animes.data.map((item, index) => (
    <CardAnime key={item.mal_id} item={item} index={index} />
  ))
}
