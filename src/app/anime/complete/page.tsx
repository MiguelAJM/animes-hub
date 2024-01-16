import Wrapper from '@/components/Wrapper'
import MainTitleAnime from '@/components/anime/MainTitleAnime'
import { IconSquareCheck } from '@tabler/icons-react'
import { getStatusAnimesAction } from '@/utils/actions/getAnimesStatusAction'
import LoadMoreAnimesComplete from '@/components/loadmore/LoadMoreAnimesComplete'

export default async function AnimesComplete() {
  const data = await getStatusAnimesAction('complete', 1)

  return (
    <Wrapper>
      <MainTitleAnime
        title='Complete Animes'
        IconTitle={<IconSquareCheck size={32} />}
        iconColor='text-pink-500'
        button={false}
      />
      <ul className='grid grid-cols-6 gap-4'>{data}</ul>
      <LoadMoreAnimesComplete />
    </Wrapper>
  )
}
