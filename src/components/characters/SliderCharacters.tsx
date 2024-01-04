'use client'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Characters } from '@/interfaces/characters'

interface Props {
  characters: Characters
}

export default function SliderCharacters({ characters }: Props) {
  const { data } = characters

  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={10}
      navigation={true}
      breakpoints={{
        425: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 6,
          spaceBetween: 10
        }
      }}
      freeMode={true}
      modules={[Pagination, FreeMode, Navigation]}
      className='w-full h-[325px] xs:h-[425px] select-none'
    >
      {data.map((character) => {
        const { images, name, mal_id } = character.character

        return (
          <SwiperSlide className='relative' key={mal_id}>
            <Image
              className='w-full h-full object-cover rounded-2xl shadow-xl brightness-75'
              src={images.webp.image_url}
              width={720}
              height={640}
              alt={name}
            />
            <div className='w-full h-full absolute bottom-0 left-0 bg-gradient-to-t from-dark to-black/40 to-[50%] rounded-xl'>
              <div className='absolute w-full p-4 bottom-0'>
                <p className='text-lightest line-clamp-1'>{name}</p>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
