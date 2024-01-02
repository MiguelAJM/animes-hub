'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { IconFlame } from '@tabler/icons-react'

interface Props {
  title: string
}

export default function NavAnime({ title }: Props) {
  const resultAnime = title.replace('-', ' ')
  const pathname = usePathname()

  const links = [
    { url: '/anime/airing', name: 'Airing' },
    { url: '/anime/complete', name: 'Complete' },
    { url: '/anime/upcoming', name: 'Upcoming' }
  ]

  return (
    <nav className='flex justify-between z-20'>
      <article className='flex gap-3 items-center flex-row-reverse'>
        <h1 className='text-3xl font-bold capitalize'>{resultAnime}</h1>
        <span>
          <IconFlame size={32} />
        </span>
      </article>
      <nav className='flex gap-2 items-center'>
        {links.map((item, index) => (
          <Link
            className={`${
              pathname === item.url
                ? 'bg-light text-darkest'
                : 'bg-dark text-lightest'
            } px-5 py-1 rounded-full`}
            key={index}
            href={item.url}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </nav>
  )
}
