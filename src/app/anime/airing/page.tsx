import { IconPlayerPlay } from '@tabler/icons-react'
import { getStatusAnimesAction } from '@/utils/actions/getAnimesStatusAction'
import Wrapper from '@/components/Wrapper'
import MainTitleAnime from '@/components/anime/MainTitleAnime'
import LoadMoreAnimesAiring from '@/components/loadmore/LoadMoreAnimesAiring'

export default async function AnimesAiring() {
  const data = await getStatusAnimesAction('airing', 1)

  return (
    <Wrapper>
      <div className='flex flex-col flex-1 gap-5 my-5'>
        <MainTitleAnime
          title='Airing Animes'
          IconTitle={<IconPlayerPlay size={32} />}
          iconColor='text-pink-500'
          button={false}
        />
        <ul className='grid grid-cols-6 gap-4'>{data}</ul>
        <LoadMoreAnimesAiring />
      </div>
    </Wrapper>
  )
}
