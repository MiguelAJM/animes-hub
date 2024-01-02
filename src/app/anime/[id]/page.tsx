import { Suspense } from 'react'
import { getAnimesById } from '@/utils/services/getAnimes'
import CardCharacters from '@/components/characters/CardCharacters'
import Image from 'next/image'

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
    type,
    duration,
    status,
    rank,
    mal_id,
    trailer
  } = data

  return (
    <section className='flex flex-col gap-12'>
      <div>
        <article>
          <h2>Anime: {title}</h2>
          <p>{synopsis}</p>
        </article>

        <figure>
          <Image
            src={images.jpg.large_image_url}
            alt={title}
            width={128}
            height={128}
          />
        </figure>
      </div>

      <article>
        {trailer.embed_url ? (
          <iframe
            title={title}
            src={trailer.embed_url}
            allow='autoplay'
            allowFullScreen
          />
        ) : (
          'No trailers available'
        )}
      </article>

      <article>
        <p>Type: {type} </p>
        <p>duration: {duration} </p>
        <p>Status: {status} </p>
        <p>Rank: {rank} </p>
      </article>

      <Suspense fallback={<div>Cargando...</div>}>
        <CardCharacters id={mal_id} />
      </Suspense>
    </section>
  )
}
