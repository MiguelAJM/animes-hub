'use server'

import CardAnime from '@/components/characters/CardAnime'
import { Movies } from '@/interfaces/movies'

export const getMoviesAction = async (page: number) => {
  const MOVIES_URL = 'https://api.jikan.moe/v4/anime?'
  const QUERY_PARAMS = `sfw&limit=24&type=movie&order_by=popularity&page=${page}`

  const res = await fetch(`${MOVIES_URL}${QUERY_PARAMS}`)
  const movies = (await res.json()) as Movies

  if (!res.ok) {
    throw new Error('Failed to fetch movies')
  }

  return movies.data.map((item, index) => (
    <CardAnime key={item.mal_id} item={item} index={index} />
  ))
}
