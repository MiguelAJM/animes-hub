import { Data } from '@/interfaces/animes'
import { MotionDiv } from '../motion/motionComponents'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  item: Data
  index: number
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

export default function CardAnime({ item, index }: Props) {
  const { title, images, mal_id } = item

  return (
    <MotionDiv
      className='col-span-3 md:col-span-2 lg:col-span-1 relative w-full h-auto rounded-xl overflow-hidden'
      variants={variants}
      initial='hidden'
      animate='visible'
      transition={{
        delay: index * 0.08,
        ease: 'easeInOut',
        duration: 0.5
      }}
      viewport={{ amount: 0 }}
    >
      <Link href={`/anime/${mal_id}`}>
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
    </MotionDiv>
  )
}
