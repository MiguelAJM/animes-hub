import { searchAnimes } from '@/utils/services/getAnimes'
import CardAnime from '@/components/characters/CardAnime'
import Wrapper from '@/components/Wrapper'
import NavAnime from '@/components/anime/NavAnime'

interface Props {
  params: { name: string }
}

export default async function AnimeResults({ params }: Props) {
  const animes = await searchAnimes(params.name)
  const { data } = animes
  return (
    <Wrapper>
      <div className='w-full min-h-[calc(100vh_-_332px)] md:min-h-[calc(100vh_-_380px)]'>
        <ul className='grid grid-cols-6 gap-4'>
          {data.map((item) => (
            <CardAnime key={item.mal_id} item={item} />
          ))}
        </ul>
      </div>
    </Wrapper>
  )
}
