import { IconList } from '@tabler/icons-react'
import { getAnimesAction } from '@/utils/actions/getAnimesAction'
import Wrapper from '@/components/Wrapper'
import MainTitleAnime from '@/components/anime/MainTitleAnime'
import LoadMoreAnimes from '@/components/loadmore/LoadMoreAnimes'

export default async function Home() {
  const data = await getAnimesAction(1)

  return (
    <Wrapper>
      <div className='flex flex-col flex-1 gap-4 my-4'>
        <MainTitleAnime
          title='Animes'
          IconTitle={<IconList size={32} />}
          iconColor='text-yellow-500'
          button={false}
        />
        <ul className='grid grid-cols-6 gap-4'>{data}</ul>
        <LoadMoreAnimes />
      </div>
    </Wrapper>
  )
}
