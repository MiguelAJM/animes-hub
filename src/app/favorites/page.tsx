'use client'
import { useFavAnimesStore } from '@/utils/store/favAnimesStore'
import { IconHeartFilled } from '@tabler/icons-react'
import useStore from '@/utils/hooks/useStore'
import CardAnime from '@/components/characters/CardAnime'
import Wrapper from '@/components/Wrapper'
import MainTitleAnime from '@/components/anime/MainTitleAnime'

export default function AnimeFavorites() {
  const favAnimes = useStore(useFavAnimesStore, (state) => state.favAnimes)

  const ITEMS = 0

  return (
    <Wrapper>
      <div className='relative w-full min-h-[calc(100vh_-_332px)] md:min-h-[calc(100vh_-_380px)]'>
        {favAnimes !== undefined && (
          <>
            {favAnimes.length === ITEMS && (
              <article className='absolute w-full h-full grid place-content-center'>
                <h2 className='text-xl md:text-6xl font-bold'>
                  Your favorites list are empty.
                </h2>
              </article>
            )}
            {favAnimes.length > ITEMS && (
              <>
                <MainTitleAnime
                  title='Favorites'
                  IconTitle={<IconHeartFilled size={32} />}
                  iconColor='text-red-500'
                  button={false}
                />
                <ul className='grid grid-cols-6 gap-4 mt-4 md:mt-8'>
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
