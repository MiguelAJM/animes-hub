import { getGenres } from '@/utils/services/getGenres'
import { IconCategory } from '@tabler/icons-react'
import { getGenresAction } from '@/utils/actions/getGenresAction'
import Wrapper from '@/components/Wrapper'
import BackButton from '@/components/genres/BackButton'
import LoadMoreAnimeGenres from '@/components/loadmore/LoadMoreAnimeGenres'

export default async function GenresById({
  params
}: {
  params: { id: string }
}) {
  const genreId = params.id
  const page = 1
  const data = await getGenresAction(genreId, page)

  // Obtener el titulo por genero
  const getGenresName = await getGenres()
  const genre = getGenresName.data.filter(
    (item) => item.mal_id === Number(params.id)
  )
  const genreTitle = genre[0].name

  const ITEMS = 0

  return (
    <Wrapper>
      <div className='relative flex flex-col flex-1 gap-2 md:gap-4 my-5'>
        {data.length === ITEMS && (
          <article className='absolute w-full h-full grid place-content-center'>
            <h2 className='text-6xl font-bold'>
              There are no animes for this genre
            </h2>
          </article>
        )}

        {data.length > ITEMS && (
          <div className='flex flex-col gap-2 md:gap-4'>
            <div className='flex items-center gap-2 md:gap-4'>
              <span className='text-lime-500'>
                <IconCategory size={32} />
              </span>
              <article className='flex w-full items-center justify-between'>
                <h2 className='text-xl md:text-2xl font-bold'>{genreTitle}</h2>
                <BackButton />
              </article>
            </div>
            <ul className='grid grid-cols-6 gap-2 md:gap-4'>{data}</ul>
            <LoadMoreAnimeGenres />
          </div>
        )}
      </div>
    </Wrapper>
  )
}
