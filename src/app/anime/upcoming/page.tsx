import { statusAnimes } from '@/utils/services/getAnimes'
import { IconNews } from '@tabler/icons-react'
import CardAnime from '@/components/characters/CardAnime'
import Wrapper from '@/components/Wrapper'
import MainTitleAnime from '@/components/anime/MainTitleAnime'

export default async function AnimesUpcoming() {
  const animes = await statusAnimes('upcoming')
  const { data } = animes

  return (
    <Wrapper>
      <MainTitleAnime
        title='Upcoming Animes'
        IconTitle={<IconNews size={32} />}
        iconColor='text-lime-500'
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
