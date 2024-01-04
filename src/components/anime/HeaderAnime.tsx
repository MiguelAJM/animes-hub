'use client'

import NavAnime from './NavAnime'
import { IconSearch } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'

export default function HeaderAnime() {
  const [anime, setAnime] = useState('')
  const router = useRouter()

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

  return (
    <header className='flex flex-col gap-8 w-full z-20'>
      <form
        className='hidden md:flex items-center gap-4 px-5 w-full rounded-full bg-lightest dark:bg-dark'
        onSubmit={handleSearch}
      >
        <label htmlFor='search-input'>
          <IconSearch size={32} />
        </label>
        <input
          className='bg-transparent py-4 dark:text-lightest w-full outline-none'
          type='text'
          id='search-input'
          placeholder='Search a anime'
          value={anime}
          onChange={handleChange}
        />
      </form>
      <NavAnime title='Anime Hub' />
    </header>
  )
}
