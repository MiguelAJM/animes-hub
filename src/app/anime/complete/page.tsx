import { getStatusAnimesAction } from '@/utils/actions/getAnimesStatusAction'
import { IconSquareCheck } from '@tabler/icons-react'
import LoadMoreAnimesComplete from '@/components/loadmore/LoadMoreAnimesComplete'
import Wrapper from '@/components/Wrapper'
import MainTitleAnime from '@/components/anime/MainTitleAnime'

export default async function AnimesComplete() {
  const data = await getStatusAnimesAction('complete', 1)

  return (
    <Wrapper>
      <div className='flex flex-col flex-1 gap-5 my-5'>
        <MainTitleAnime
          title='Complete Animes'
          IconTitle={<IconSquareCheck size={32} />}
          iconColor='text-lime-500'
          button={false}
        />
        <ul className='grid grid-cols-6 gap-2 md:gap-4'>{data}</ul>
        <LoadMoreAnimesComplete />
      </div>
    </Wrapper>
  )
}
