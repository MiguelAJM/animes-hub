import { Data } from '@/interfaces/animes'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  item: Data
}

export default function CardAnime({ item }: Props) {
  return (
    <div>
      <h2>{item.title}</h2>
      <Link href={`/anime/${item.mal_id}`}>
        <Image
          className='size-64 object-cover'
          src={item.images.jpg.large_image_url}
          alt={item.title}
          width={128}
          height={128}
        />
      </Link>
    </div>
  )
}
