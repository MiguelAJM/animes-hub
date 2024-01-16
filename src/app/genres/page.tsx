import { IconCategory } from '@tabler/icons-react'
import { getGenres } from '@/utils/services/getGenres'
import Wrapper from '@/components/Wrapper'
import CardGenres from '@/components/genres/CardGenres'
import MainTitleAnime from '@/components/anime/MainTitleAnime'

export default async function page() {
  const genres = await getGenres()

  return (
    <Wrapper>
      <div className='flex flex-col flex-1 gap-4 my-4'>
        <MainTitleAnime
          title='Genres'
          IconTitle={<IconCategory size={32} />}
          iconColor='text-lime-500'
          button={false}
        />

        <ul className='grid grid-cols-6 gap-2 md:gap-4'>
          {genres.data.map((item) => (
            <CardGenres key={item.mal_id} item={item} />
          ))}
        </ul>
      </div>
    </Wrapper>
  )
}
