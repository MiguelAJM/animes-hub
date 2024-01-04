import { Datum } from '@/interfaces/genres'
import Link from 'next/link'

interface Props {
  item: Datum
}

export default function CardGenres({ item }: Props) {
  return (
    <Link
      href={`/genres/${item.mal_id}`}
      className='col-span-3 md:col-span-2 lg:col-span-1 p-4 bg-brand-2 rounded-xl text-dark font-bold text-xs md:text-xl line-clamp-1 w-full text-center transition-all duration-300 ease-in-out hover:bg-white hover:text-dark'
    >
      <h3>{item.name}</h3>
    </Link>
  )
}
