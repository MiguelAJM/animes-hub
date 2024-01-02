import { statusAnimes } from '@/utils/services/getAnimes'
import CardAnime from '@/components/characters/CardAnime'
import Wrapper from '@/components/Wrapper'

export default async function AnimesAiring() {
  const animes = await statusAnimes('airing')
  const { data } = animes

  return (
    <Wrapper>
      <ul className='grid grid-cols-6 gap-4'>
        {data.map((item) => (
          <CardAnime key={item.mal_id} item={item} />
        ))}
      </ul>
    </Wrapper>
  )
}
