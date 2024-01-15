import { IconList } from '@tabler/icons-react'
import { getAnimesAction } from '@/utils/actions/getAnimesAction'
import { Data } from '@/interfaces/animes'
import CardAnime from '@/components/characters/CardAnime'
import Wrapper from '@/components/Wrapper'
import MainTitleAnime from '@/components/anime/MainTitleAnime'
import LoadMoreAnimes from '@/components/anime/LoadMoreAnimex'

export default async function Home() {
  const animes = await getAnimesAction(1)
  const lastPagination = animes.pagination.last_visible_page

  return (
    <Wrapper>
      <MainTitleAnime
        title='Animes'
        IconTitle={<IconList size={32} />}
        iconColor='text-yellow-500'
        button={false}
      />
      <ul className='grid grid-cols-6 gap-4'>
        {animes.data.map((item: Data) => (
          <CardAnime key={item.mal_id} item={item} />
        ))}
      </ul>
      <LoadMoreAnimes lastPage={lastPagination} />
    </Wrapper>
  )
}
