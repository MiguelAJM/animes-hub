import { getCharacters } from '@/utils/services/getAnimes'
import CharactersAnime from '../anime/CharactersAnime'
import Alert from '../elements/Altert'

interface Props {
  id: number
}

export default async function CardCharacters({ id }: Props) {
  const characters = await getCharacters(id)
  const { data } = characters
  const EMPTY_CHARACTERS = 0

  return (
    <>
      <h2 className='text-5xl font-light mb-4'>
        <span className='line-clamp-1'>Characters</span>
      </h2>

      {data.length === EMPTY_CHARACTERS && (
        <Alert description='No characters available' />
      )}
      {data.length > EMPTY_CHARACTERS && (
        <CharactersAnime characters={characters} />
      )}
    </>
  )
}
