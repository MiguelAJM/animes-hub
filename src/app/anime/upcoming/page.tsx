import { IconNews } from '@tabler/icons-react'
import { getStatusAnimesAction } from '@/utils/actions/getAnimesStatusAction'
import Wrapper from '@/components/Wrapper'
import MainTitleAnime from '@/components/anime/MainTitleAnime'
import LoadMoreAnimesUpcoming from '@/components/loadmore/LoadMoreAnimesUpcoming'

export default async function AnimesUpcoming() {
  const data = await getStatusAnimesAction('upcoming', 1)

  return (
    <Wrapper>
      <div className='flex flex-col flex-1 gap-5 my-5'>
        <MainTitleAnime
          title='Upcoming Animes'
          IconTitle={<IconNews size={32} />}
          iconColor='text-lime-500'
          button={false}
        />
        <ul className='grid grid-cols-6 gap-4'>{data}</ul>
        <LoadMoreAnimesUpcoming />
      </div>
    </Wrapper>
  )
}
