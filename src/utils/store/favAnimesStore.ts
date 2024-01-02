import { Data } from '@/interfaces/animes'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface FavAnimesState {
  favAnimes: Array<Data>
  addFavAnime: (favAnimes: Data) => void
  delFavAnime: (id: number) => void
}

export const useFavAnimesStore = create(
  persist<FavAnimesState>(
    (set) => ({
      favAnimes: [],
      addFavAnime: (favAnimes) =>
        set((state) => ({ favAnimes: [...state.favAnimes, favAnimes] })),
      delFavAnime: (id) =>
        set((state) => ({
          favAnimes: state.favAnimes.filter((item) => item.mal_id !== id)
        }))
    }),
    {
      name: 'fav-animes'
    }
  )
)
