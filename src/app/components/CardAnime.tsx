import { Data } from '@/interfaces/animes'
import Image from 'next/image'

interface Props {
  item: Data
}

export default function CardAnime({ item }: Props) {
  return (
    <div>
      <h2>{item.title}</h2>
      <Image
        src={item.images.jpg.image_url}
        alt={item.title}
        width={128}
        height={128}
      />
    </div>
  )
}
