import { Data } from '@/interfaces/animes'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  item: Data
}

export default function CardAnime({ item }: Props) {
  const { title, images, mal_id } = item
  return (
    <Link
      href={`/anime/${mal_id}`}
      className='relative w-full h-auto rounded-xl overflow-hidden'
    >
      <Image
        className='aspect-9/16 w-full object-cover'
        src={images.jpg.large_image_url}
        alt={title}
        width={128}
        height={128}
      />
      <div className='w-full h-full absolute bottom-0 left-0 bg-gradient-to-t from-dark to-black/40 to-[50%] rounded-xl' />
      <h2 className='absolute line-clamp-1 font-bold pt-4 z-10 bottom-0 px-4 py-1'>
        {title}
      </h2>
    </Link>
  )
}
