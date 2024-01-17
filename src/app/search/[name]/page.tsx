import { getAnimeSearchAction } from '@/utils/actions/getAnimesAction'
import Wrapper from '@/components/Wrapper'
import LoadMoreAnimeSearch from '@/components/loadmore/LoadMoreAnimeSearch'

export default async function AnimeResults({
  params
}: {
  params: { name: string }
}) {
  const animeName = params.name
  const data = await getAnimeSearchAction(animeName, 1)

  return (
    <Wrapper>
      <div className='flex flex-col flex-1 gap-2 md:gap-4 my-5'>
        <ul className='grid grid-cols-6 gap-2 md:gap-4'>{data}</ul>
        <LoadMoreAnimeSearch />
      </div>
    </Wrapper>
  )
}
