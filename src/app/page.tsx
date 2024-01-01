import { Animes } from '@/interfaces/animes'
import CardAnime from './components/CardAnime'

const getAnimes = async () => {
  const data = await fetch('https://api.jikan.moe/v4/anime')
  const res = (await data.json()) as Animes

  if (!data.ok) {
    throw new Error('Failed to fetch data')
  }

  // throw new Error('Failed to fetch data. Try Again')
  return res
}

export default async function Home() {
  const animes = await getAnimes()

  return (
    <main>
      <h1>Animes</h1>
      <ul>
        {animes.data.map((item) => (
          <CardAnime key={item.mal_id} item={item} />
        ))}
      </ul>
    </main>
  )
}
