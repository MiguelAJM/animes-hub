import CardAnime from '@/components/characters/CardAnime'
import { searchCharacters } from '@/utils/services/getAnimes'

interface Props {
  params: { name: string }
}

export default async function AnimeResults({ params }: Props) {
  const animes = await searchCharacters(params.name)

  return (
    <div>
      {animes.data.map((item) => (
        <CardAnime key={item.mal_id} item={item}/>
      ))}
    </div>
  )
}
