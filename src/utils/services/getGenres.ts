import { Genres } from "@/interfaces/genres"

export const getGenres = async (page: string = '1') => {
    const GENRES = 'https://api.jikan.moe/v4/genres/anime'
    const QUERY_PARAMS = `&sfw&limit=24&type=tv&status=upcoming&page=${page}`
  
    const res = await fetch(GENRES)
    const data = (await res.json()) as Genres
  
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
  
    return data
  }