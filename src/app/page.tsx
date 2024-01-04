import { getAnimes } from '@/utils/services/getAnimes'
import { IconList } from '@tabler/icons-react'
import CardAnime from '@/components/characters/CardAnime'
import Wrapper from '@/components/Wrapper'
import ButtonPage from '@/components/elements/ButtonPage'
import MainTitleAnime from '@/components/anime/MainTitleAnime'

export default async function Home() {
  const animes = await getAnimes()
  const { data } = animes

  return (
    <Wrapper>
      <MainTitleAnime
        title='Animes'
        IconTitle={<IconList size={32} />}
        iconColor='text-yellow-500'
        button={true}
        pagination={<ButtonPage data={animes} />}
      />
      <ul className='grid grid-cols-6 gap-4'>
        {data.map((item) => (
          <CardAnime key={item.mal_id} item={item} />
        ))}
      </ul>
    </Wrapper>
  )
}
