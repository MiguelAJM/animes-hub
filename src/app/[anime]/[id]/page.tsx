import CardCharacters from '@/components/characters/CardCharacters'
import { AnimeByID } from '@/interfaces/animesById'
import Image from 'next/image'
import { Suspense } from 'react'

const getAnimesById = async (id: string) => {
  const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
  const data = (await res.json()) as AnimeByID

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return data
}

export default async function AnimePage({
  params
}: {
  params: { id: string }
}) {
  const ID = params.id
  const anime = await getAnimesById(ID)

  return (
    <div>
      <h2>Anime: {anime.data.title}</h2>
      <br />
      <p>{anime.data.synopsis}</p>
      <br />
      <hr />
      <br />
      <Image
        src={anime.data.images.jpg.large_image_url}
        alt={anime.data.title}
        width={128}
        height={128}
      />
      <br />
      <hr />
      <br />
      <p>Type: {anime.data.type} </p>
      <p>duration: {anime.data.duration} </p>
      <p>Status: {anime.data.status} </p>
      <p>Rank: {anime.data.rank} </p>
      <br />
      <hr />
      <br />
      <Suspense fallback={<div>Cargando...</div>}>
        <CardCharacters id={anime.data.mal_id} />
      </Suspense>
    </div>
  )
}
