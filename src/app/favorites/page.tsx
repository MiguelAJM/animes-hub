'use client'
import { useFavAnimesStore } from '@/utils/store/favAnimesStore'
import { IconHeartFilled } from '@tabler/icons-react'
import useStore from '@/utils/hooks/useStore'
import CardAnime from '@/components/characters/CardAnime'
import Wrapper from '@/components/Wrapper'

export default function AnimeFavorites() {
  const favAnimes = useStore(useFavAnimesStore, (state) => state.favAnimes)

  const ITEMS = 0

  return (
    <Wrapper>
      <div className='relative w-full min-h-[calc(100vh_-_380px)]'>
        {favAnimes !== undefined && (
          <>
            {favAnimes.length === ITEMS && (
              <article className='absolute w-full h-full grid place-content-center'>
                <h2 className='text-6xl font-bold'>
                  Your favorites list are empty.
                </h2>
              </article>
            )}
            {favAnimes.length > ITEMS && (
              <>
                <article className='flex items-center gap-4 mb-8'>
                  <span className='text-red-500'>
                    <IconHeartFilled size={32} />
                  </span>
                  <h2 className='text-4xl font-bold'>Favorites</h2>
                </article>
                <ul className='grid grid-cols-6 gap-4'>
                  {favAnimes.map((item) => {
                    return <CardAnime key={item.mal_id} item={item} />
                  })}
                </ul>
              </>
            )}
          </>
        )}
      </div>
    </Wrapper>
  )
}