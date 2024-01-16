import { AnimeByID } from '@/interfaces/animesById'
import { Characters } from '@/interfaces/characters'

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
