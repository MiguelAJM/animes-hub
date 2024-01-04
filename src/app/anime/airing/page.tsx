import { statusAnimes } from '@/utils/services/getAnimes'
import { IconPlayerPlay } from '@tabler/icons-react'
import CardAnime from '@/components/characters/CardAnime'
import Wrapper from '@/components/Wrapper'

export default async function AnimesAiring() {
  const animes = await statusAnimes('airing')
  const { data } = animes

  return (
    <Wrapper>
      <article className='flex items-center gap-4'>
        <span className='text-pink-500'>
          <IconPlayerPlay size={32} />
        </span>
        <h2 className='text-4xl font-bold'>Airing Animes</h2>
      </article>
      <ul className='grid grid-cols-6 gap-4'>
        {data.map((item) => (
          <CardAnime key={item.mal_id} item={item} />
        ))}
      </ul>
    </Wrapper>
  )
}
