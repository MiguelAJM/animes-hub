import { Animes } from '@/interfaces/animes'
import CardAnime from '@/components/characters/CardAnime'

const getAnimes = async () => {
  const res = await fetch('https://api.jikan.moe/v4/anime')
  const data = (await res.json()) as Animes

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  // throw new Error('Failed to fetch data. Try Again')
  return data
}

export default async function Home() {
  const animes = await getAnimes()

  return (
    <main>
      <ul>
        {animes.data.map((item) => (
          <CardAnime key={item.mal_id} item={item} />
        ))}
      </ul>
    </main>
  )
}
