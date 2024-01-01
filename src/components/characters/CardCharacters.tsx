import { Characters } from '@/interfaces/characters'
import Image from 'next/image'

interface Props {
  id: number
}

const getCharacters = async (id: number) => {
  const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`)
  const data = (await res.json()) as Characters

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return data
}

export default async function CardCharacters({ id }: Props) {
  const characters = await getCharacters(id)

  return (
    <div>
      <h2>Characters</h2>
      <br />
      <ul>
        {characters.data.map((item) => (
          <li key={item.character.mal_id}>
            <h2> {item.character.name} </h2>
            <Image
              src={item.character.images.jpg.image_url}
              alt={item.character.name}
              width={128}
              height={128}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
