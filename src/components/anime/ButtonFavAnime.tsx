'use client'
import { Data } from '@/interfaces/animes'
import { useFavAnimesStore } from '@/utils/store/favAnimesStore'
import useStore from '@/utils/hooks/useStore'
import { IconHeart, IconHeartFilled } from '@tabler/icons-react'
import { toast } from 'sonner'

interface Props {
  anime: Data
  id: string
}

export default function ButtonFavAnime({ anime, id }: Props) {
  const animeId = Number(id)

  const favAnimes = useStore(useFavAnimesStore, (state) => state.favAnimes)

  const addFavAnime = useFavAnimesStore((state) => state.addFavAnime)
  const delFavAnime = useFavAnimesStore((state) => state.delFavAnime)

  const checkFavAnime = () => {
    if (favAnimes !== undefined) {
      return favAnimes.some((item) => item.mal_id === animeId)
    }
  }

  const isFavAnime = checkFavAnime()

  const toggleFavAnime = () => {
    if (isFavAnime === true) {
      toast.info('Anime deleted the favorites')
      return delFavAnime(animeId)
    }
    if (isFavAnime === false) {
      toast.info('Anime added the favorites')
      return addFavAnime(anime)
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
