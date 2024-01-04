import { getAnimes } from '@/utils/services/getAnimes'
import { IconList } from '@tabler/icons-react'
import Wrapper from '@/components/Wrapper'
import ButtonPage from '@/components/elements/ButtonPage'
import CardAnime from '@/components/characters/CardAnime'

export default async function AnimePagination({ params }: { params: { page: string } }) {
  const animes = await getAnimes(params.page)
  const { data } = animes

  return (
    <Wrapper>
      <div className='flex items-center gap-4'>
        <span className='text-yellow-500'>
          <IconList size={32} />
        </span>
        <article className='flex w-full items-center justify-between'>
          <h2 className='text-4xl font-bold'>Animes</h2>
          <ButtonPage data={animes} />
        </article>
      </div>
      <ul className='grid grid-cols-6 gap-4'>
        {data.map((item) => (
          <CardAnime key={item.mal_id} item={item} />
        ))}
      </ul>
    </Wrapper>
  )
}
