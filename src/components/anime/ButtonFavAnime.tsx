'use client'
import { Data } from '@/interfaces/animes'
import { useFavAnimesStore } from '@/utils/store/favAnimesStore'
import useStore from '@/utils/hooks/useStore'
import { IconHeart, IconHeartFilled } from '@tabler/icons-react'

interface Props {
  data: Data
  id: string
}

export default function ButtonFavAnime({ data, id }: Props) {
  const animeID = Number(id)

  const favAnimes = useStore(useFavAnimesStore, (state) => state.favAnimes)

  const addFavAnime = useFavAnimesStore((state) => state.addFavAnime)
  const delFavAnime = useFavAnimesStore((state) => state.delFavAnime)

  const checkFavAnime = () => {
    if (favAnimes !== undefined) {
      return favAnimes.some((item) => item.mal_id === animeID)
    }
  }

  const isFavAnime = checkFavAnime()

  const toggleFavAnime = () => {
    if (isFavAnime === true) {
      return delFavAnime(animeID)
    }
    if (isFavAnime === false) {
      return addFavAnime(data)
    }
  }

  return (
    <button
      onClick={toggleFavAnime}
      className='p-4 bg-light text-darkest rounded-xl'
    >
      {!isFavAnime ? <IconHeart className='text-red-600' size={32} /> : <IconHeartFilled className='text-red-600' size={32} />}
    </button>
  )
}
