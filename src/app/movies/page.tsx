import { getMovies } from '@/utils/services/getMovies'
import { IconPlayerPlay } from '@tabler/icons-react'
import Wrapper from '@/components/Wrapper'
import MainTitleAnime from '@/components/anime/MainTitleAnime'
import CardAnime from '@/components/characters/CardAnime'

export default async function MoviesAnime() {
  const movies = await getMovies()
  const { data } = movies

  return (
    <Wrapper>
      <MainTitleAnime
        title='Movies'
        IconTitle={<IconPlayerPlay size={32} />}
        iconColor='text-red-500'
        button={false}
      />
      <ul className='grid grid-cols-6 gap-4'>
        {data.map((item) => (
          <CardAnime key={item.mal_id} item={item} />
        ))}
      </ul>
    </Wrapper>
  )
}
