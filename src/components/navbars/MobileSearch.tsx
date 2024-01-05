'use client'

import { toggleSearchStore } from '@/utils/store/toggleSearchStore'
import { IconSearch } from '@tabler/icons-react'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

export default function MobileSearch() {
  const [anime, setAnime] = useState('')
  const router = useRouter()
  const pathname = usePathname()

  const menuState = toggleSearchStore((state) => state.menu)
  const disableMenu = toggleSearchStore((state) => state.disableSearh)

  const regex = /[!@#$%^&*()_+={}\[\]:;<>,.?~\\/\- ]/g
  const title = anime.replace(regex, '-').toLowerCase()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setAnime(e.target.value)

  const handleSearch = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const EMPTY_STRING = ''

    if (anime === EMPTY_STRING) {
      return toast.error('Please, type name anime')
    }
    router.push(`/search/${title}`)
    setAnime('')
  }

  useEffect(() => {
    disableMenu()
  }, [pathname, disableMenu])

  return (
    <header
      className={`z-50 fixed bottom-0  ${
        menuState ? '-translate-y-24' : 'translate-y-0'
      }  w-full px-2 ease-in-out duration-300 transition-all`}
    >
      <form
        className='flex md:hidden items-center gap-4 px-5 w-full rounded-xl bg-lightest dark:bg-darkest border-2 border-white'
        onSubmit={handleSearch}
      >
        <label htmlFor='search-input'>
          <IconSearch size={32} />
        </label>
        <input
          className='bg-transparent py-4 dark:text-lightest w-full outline-none'
          type='text'
          autoComplete='off'
          id='search-input'
          placeholder='Search a anime'
          value={anime}
          onChange={handleChange}
        />
      </form>
    </header>
  )
}
