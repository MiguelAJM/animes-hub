import { Data } from '@/interfaces/animes'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  item: Data
}

export default function CardAnime({ item }: Props) {
  const { title, images, mal_id } = item
  return (
    <div>
      <h2>{title}</h2>
      <Link href={`/anime/${mal_id}`}>
        <Image
          className='size-64 object-cover'
          src={images.jpg.large_image_url}
          alt={title}
          width={128}
          height={128}
        />
      </Link>
    </div>
  )
}
