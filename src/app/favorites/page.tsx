'use client'
import { useFavAnimesStore } from '@/utils/store/favAnimesStore'
import useStore from '@/utils/hooks/useStore'
import Image from 'next/image'
import Link from 'next/link'

export default function AnimeFavorites() {
  const favAnimes = useStore(useFavAnimesStore, (state) => state.favAnimes)

  return (
    <section>
      <h1>Favorites</h1>

      <ul className='grid grid-cols-6 gap-4'>
        {favAnimes !== undefined &&
          favAnimes.map((item) => {
            return (
              <li key={item.mal_id}>
                <article>
                  <h2>{item.title}</h2>
                </article>

                <Link href={`/anime/${item.mal_id}`}>
                  <Image
                    src={item.images.jpg.large_image_url}
                    alt={item.title}
                    width={128}
                    height={128}
                  />
                </Link>
              </li>
            )
          })}
      </ul>
    </section>
  )
}
