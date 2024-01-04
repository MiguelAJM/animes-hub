import { statusAnimes } from '@/utils/services/getAnimes'
import { IconPlayerPlay } from '@tabler/icons-react'
import CardAnime from '@/components/characters/CardAnime'
import Wrapper from '@/components/Wrapper'
import MainTitleAnime from '@/components/anime/MainTitleAnime'

export default async function AnimesAiring() {
  const animes = await statusAnimes('airing')
  const { data } = animes

  return (
    <Wrapper>
      <MainTitleAnime
        title='Airing Animes'
        IconTitle={<IconPlayerPlay size={32} />}
        iconColor='text-pink-500'
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
