'use server'

import CardAnime from '@/components/characters/CardAnime'
import { Animes } from '@/interfaces/animes'

export const getGenresAction = async (id: string, page: number) => {
  const GENRES = 'https://api.jikan.moe/v4/anime?'
  const QUERY_PARAMS = `sfw&limit=24&type=tv&order_by_popularity&genres=${id}&page=${page}`

  const res = await fetch(GENRES + QUERY_PARAMS)
  const genres = (await res.json()) as Animes

  if (!res.ok) {
    throw new Error('Failed to fetch genres')
  }

  return genres.data.map((item, index) => (
    <CardAnime key={item.mal_id} item={item} index={index} />
  ))
}
