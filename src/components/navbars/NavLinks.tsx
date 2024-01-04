'use client'
import {
  IconCategory,
  IconHeart,
  IconHome,
  IconPlayerPlay
} from '@tabler/icons-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function NavLinks() {
  const pathname = usePathname()

  const links = [
    { url: '/', name: 'Home', icon: IconHome },
    { url: '/genres', name: 'Genres', icon: IconCategory },
    { url: '/movies', name: 'Movies', icon: IconPlayerPlay },
    { url: '/favorites', name: 'Favorites', icon: IconHeart }
  ]

  return (
    <ul className='flex flex-col gap-3'>
      {links.map((item) => (
        <Link
          className={`${
            pathname === item.url
              ? 'bg-light text-darkest'
              : 'bg-darkest text-lightest'
          } p-2 lg:p-3 rounded-xl`}
          key={item.name}
          href={item.url}
        >
          <item.icon size={24} />
        </Link>
      ))}
    </ul>
  )
}
