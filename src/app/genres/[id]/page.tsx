import { getGenres, getGenresId } from '@/utils/services/getGenres'
import { IconCategory } from '@tabler/icons-react'
import Wrapper from '@/components/Wrapper'
import CardAnime from '@/components/characters/CardAnime'
import BackButton from '@/components/genres/BackButton'

export default async function GenresById({
  params
}: {
  params: { id: string }
}) {
  const genresId = await getGenresId(params.id)
  const { data } = genresId

  const getGenresName = await getGenres()
  const genre = getGenresName.data.filter(
    (item) => item.mal_id === Number(params.id)
  )
  const genreTitle = genre[0].name

  const ITEMS = 0

  return (
    <Wrapper>
      <div className='relative w-full min-h-[calc(100vh_-_380px)]'>
        {data.length === ITEMS && (
          <article className='absolute w-full h-full grid place-content-center'>
            <h2 className='text-6xl font-bold'>Your favorite list are empty</h2>
          </article>
        )}

        {data.length > ITEMS && (
          <>
            <div className='flex items-center gap-4 mb-8'>
              <span className='text-lime-500'>
                <IconCategory size={32} />
              </span>
              <article className='flex w-full items-center justify-between'>
                <h2 className='text-4xl font-bold'>Genre - {genreTitle}</h2>
                <BackButton />
              </article>
            </div>
            <ul className='grid grid-cols-6 gap-4'>
              {data.map((item) => (
                <CardAnime key={item.mal_id} item={item} />
              ))}
            </ul>
          </>
        )}
      </div>
    </Wrapper>
  )
}