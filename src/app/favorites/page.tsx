'use client'
import { useFavAnimesStore } from '@/utils/store/favAnimesStore'
import { IconHeartFilled } from '@tabler/icons-react'
import useStore from '@/utils/hooks/useStore'
import CardAnime from '@/components/characters/CardAnime'
import Wrapper from '@/components/Wrapper'

export default function AnimeFavorites() {
  const favAnimes = useStore(useFavAnimesStore, (state) => state.favAnimes)

  return (
    <Wrapper>
      <article className='flex items-center gap-4'>
        <span className='text-red-500'>
          <IconHeartFilled size={32} />
        </span>
        <h2 className='text-4xl font-bold'>Favorites</h2>
      </article>
      <div className='w-full min-h-[calc(100vh_-_380px)] '>
        {favAnimes !== undefined &&
          (favAnimes.length === 0 ? (
            <article className='w-full grid place-content-center'>
              <h2 className='text-6xl font-bold'>
                Your favorite list are empty
              </h2>
            </article>
          ) : (
            <ul className='grid grid-cols-6 gap-4'>
              {favAnimes.map((item) => {
                return <CardAnime key={item.mal_id} item={item} />
              })}
            </ul>
          ))}
      </div>
    </Wrapper>
  )
}
