import { IconPlayerPlay } from '@tabler/icons-react'
import Wrapper from '@/components/Wrapper'
import MainTitleAnime from '@/components/anime/MainTitleAnime'
import LoadMoreAnimeMovies from '@/components/loadmore/LoadMoreAnimeMovies'
import { getMoviesAction } from '@/utils/actions/getMoviesAction'

export default async function MoviesAnime() {
  const data = await getMoviesAction(1)

  return (
    <Wrapper>
      <div className='flex flex-col flex-1 gap-5 my-5'>
        <MainTitleAnime
          title='Movies'
          IconTitle={<IconPlayerPlay size={32} />}
          iconColor='text-red-500'
          button={false}
        />
        <ul className='grid grid-cols-6 gap-4'>{data}</ul>
        <LoadMoreAnimeMovies />
      </div>
    </Wrapper>
  )
}
