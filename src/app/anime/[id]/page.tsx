import { Suspense } from 'react'
import { getAnimesById } from '@/utils/services/getAnimes'
import Image from 'next/image'
import CardCharacters from '@/components/characters/CardCharacters'
import ButtonFavAnime from '@/components/anime/ButtonFavAnime'
import Wrapper from '@/components/Wrapper'
import Divider from '@/components/elements/Divider'
import RatingAnime from '@/components/anime/RatingAnime'
import InformationAnime from '@/components/anime/InformationAnime'
import SynopsisAnime from '@/components/anime/SynopsisAnime'
import TrailerAnime from '@/components/anime/TrailerAnime'
import LoaderCharacters from '@/components/characters/LoaderCharacters'

interface Props {
  params: { id: string }
}

export default async function AnimePage({ params }: Props) {
  const id = params.id
  const anime = await getAnimesById(id)

  const { data } = anime
  const {
    title,
    synopsis,
    images,
    mal_id,
    trailer,
    score,
    status,
    duration,
    year,
    rank,
    popularity,
    members
  } = data

  return (
    <Wrapper>
      <div className='flex flex-col flex-1 gap-2 md:gap-4 my-8'>
        <article className='flex flex-wrap md:flex-nowrap gap-8'>
          <figure className='max-w-xs mx-auto h-full rounded-xl overflow-hidden'>
            <Image
              className='w-full h-auto object-cover aspect-9/16'
              src={images.jpg.large_image_url}
              alt={title}
              width={128}
              height={128}
            />
          </figure>

          <div className='w-full'>
            <div className='flex flex-col md:flex-row gap-4 justify-between items-center'>
              <h2 className='text-xl md:text-2xl lg:text-5xl font-light text-balance pb-1'>
                {title}
              </h2>
              <ButtonFavAnime anime={data} id={id} />
            </div>
            <Divider styles='my-8 border-white/20' />

            <RatingAnime score={score} />
            <InformationAnime
              status={status}
              duration={duration}
              year={year}
              rank={rank}
              members={members}
              popularity={popularity}
            />

            <Divider styles='my-8 border-white/20' />
            <SynopsisAnime synopsis={synopsis} />
          </div>
        </article>

        <TrailerAnime trailer={trailer} />

        <Suspense fallback={<LoaderCharacters />}>
          <CardCharacters id={mal_id} />
        </Suspense>
      </div>
    </Wrapper>
  )
}
