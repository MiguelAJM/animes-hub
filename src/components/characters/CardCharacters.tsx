import { getCharacters } from '@/utils/services/getAnimes'
import Image from 'next/image'

interface Props {
  id: number
}

export default async function CardCharacters({ id }: Props) {
  const characters = await getCharacters(id)

  return (
    <div>
      <h2>Characters</h2>
      <br />
      <ul className='grid grid-cols-6'>
        {characters.data.map((item) => (
          <li className='col-span-1' key={item.character.mal_id}>
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
