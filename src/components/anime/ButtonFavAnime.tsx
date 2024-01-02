'use client'
import { Data } from '@/interfaces/animes'
import { useFavAnimesStore } from '@/utils/store/favAnimesStore'
import useStore from '@/utils/hooks/useStore'

interface Props {
  data: Data
  id: string
}

export default function ButtonFavAnime({ data, id }: Props) {
  const animeID = Number(id)

  // const favAnimes = useFavAnimesStore((state) => state.favAnimes)

  const favAnimes = useStore(useFavAnimesStore, (state) => state.favAnimes)

  const addFavAnime = useFavAnimesStore((state) => state.addFavAnime)
  const delFavAnime = useFavAnimesStore((state) => state.delFavAnime)

  const checkFavAnime = () => {
    if (favAnimes !== undefined) {
      return favAnimes.some((item) => item.mal_id === animeID)
    }
  }

  const isFavAnime = checkFavAnime()

  return (
    <button
      onClick={
        !isFavAnime ? () => addFavAnime(data) : () => delFavAnime(animeID)
      }
      className='my-5 p-4 bg-blue-500 rounded-xl'
    >
      {!isFavAnime ? 'Add favorite anime' : 'Delete favorite anime'}
    </button>
  )
}
