import { getAnimes } from '@/utils/services/getAnimes'
import { IconList } from '@tabler/icons-react'
import Wrapper from '@/components/Wrapper'
import ButtonPage from '@/components/elements/ButtonPage'
import CardAnime from '@/components/characters/CardAnime'
import MainTitleAnime from '@/components/anime/MainTitleAnime'

export default async function AnimePagination({
  params
}: {
  params: { page: string }
}) {
  const animes = await getAnimes(params.page)
  const { data } = animes

  return (
    <Wrapper>
      <div className='w-full min-h-[calc(100vh_-_332px)] md:min-h-[calc(100vh_-_380px)]  '>
        <MainTitleAnime
          title='Animes'
          IconTitle={<IconList size={24} />}
          iconColor='text-yellow-500'
          button={true}
          pagination={<ButtonPage data={animes} />}
        />
        <ul className='grid grid-cols-6 gap-4'>
          {data.map((item) => (
            <CardAnime key={item.mal_id} item={item} />
          ))}
        </ul>
      </div>
    </Wrapper>
  )
}
