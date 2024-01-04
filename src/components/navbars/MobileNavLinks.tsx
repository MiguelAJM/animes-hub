'use client'
import {
  IconCategory,
  IconHeartFilled,
  IconHome,
  IconPlayerPlay,
  IconSearch
} from '@tabler/icons-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MobileNavLinks() {
  const pathname = usePathname()

  return (
    <ul className='flex justify-between items-center h-full w-full gap-2 px-4'>
      <li
        className={`${
          pathname === '/'
            ? 'bg-light text-darkest'
            : 'bg-darkest text-lightest'
        } p-2 rounded-xl`}
      >
        <Link className={``} href={'/'}>
          <IconHome />
        </Link>
      </li>
      <li
        className={`${
          pathname === '/genres'
            ? 'bg-light text-darkest'
            : 'bg-darkest text-lightest'
        } p-2 rounded-xl`}
      >
        <Link href={'/genres'}>
          <IconCategory />
        </Link>
      </li>
      <li className='bg-darkest text-lightest p-2 rounded-xl'>
        <IconSearch />
      </li>
      <li
        className={`${
          pathname === '/movies'
            ? 'bg-light text-darkest'
            : 'bg-darkest text-lightest'
        } p-2 rounded-xl`}
      >
        <Link href={'/movies'}>
          <IconPlayerPlay />
        </Link>
      </li>
      <li
        className={`${
          pathname === '/favorites'
            ? 'bg-light text-darkest'
            : 'bg-darkest text-lightest'
        } p-2 rounded-xl`}
      >
        <Link href={'/favorites'}>
          <IconHeartFilled />
        </Link>
      </li>
    </ul>
  )
}
