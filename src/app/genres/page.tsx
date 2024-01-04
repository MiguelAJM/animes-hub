import { IconCategory } from '@tabler/icons-react'
import Wrapper from '@/components/Wrapper'
import { getGenres } from '@/utils/services/getGenres'
import CardGenres from '@/components/genres/CardGenres'

export default async function page() {
  const genres = await getGenres()

  return (
    <Wrapper>
      <article className='flex items-center gap-4'>
        <span className='text-lime-500'>
          <IconCategory size={32} />
        </span>
        <h2 className='text-4xl font-bold'>Genres</h2>
      </article>

      <ul>
        {genres.data.map((item) => (
          <CardGenres key={item.mal_id} item={item} />
        ))}
      </ul>
    </Wrapper>
  )
}