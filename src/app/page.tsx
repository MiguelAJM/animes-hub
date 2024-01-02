import { getAnimes } from '@/utils/services/getAnimes'
import CardAnime from '@/components/characters/CardAnime'

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
