'use server'

import CardAnime from '@/components/characters/CardAnime'
import { Animes } from '@/interfaces/animes'

export const getStatusAnimesAction = async (status: string, page: number) => {
  const STATUS_ANIMES_URL = 'https://api.jikan.moe/v4/anime?'
  const QUERY_PARAMS = `sfw&limit=24&status=upcoming&order_by=popularity&status=${status}&page=${page}`

  const res = await fetch(STATUS_ANIMES_URL + QUERY_PARAMS)
  const anime = (await res.json()) as Animes

  if (!res.ok) {
    throw new Error('Failed to fetch anime')
  }

  return anime.data.map((item, index) => (
    <CardAnime key={item.mal_id} item={item} index={index} />
  ))
}
