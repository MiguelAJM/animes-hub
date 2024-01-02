'use client'
import { useFavAnimesStore } from '@/utils/store/favAnimesStore'
import useStore from '@/utils/hooks/useStore'
import CardAnime from '@/components/characters/CardAnime'
import Wrapper from '@/components/Wrapper'

export default function AnimeFavorites() {
  const favAnimes = useStore(useFavAnimesStore, (state) => state.favAnimes)

  return (
    <Wrapper>
      <ul className='grid grid-cols-6 gap-4'>
        {favAnimes !== undefined &&
          favAnimes.map((item) => {
            return (
              <CardAnime key={item.mal_id} item={item} />
            )
          })}
      </ul>
    </Wrapper>
  )
}
