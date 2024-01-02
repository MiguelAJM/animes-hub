'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'

export default function Navbar() {
  const [anime, setAnime] = useState('')
  const router = useRouter()

  const regex = /[!@#$%^&*()_+={}\[\]:;<>,.?~\\/\- ]/g
  const title = anime.replace(regex, '-').toLowerCase()
  
  console.log(title)

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
    <header>
      <form onSubmit={handleSearch}>
        <input
          className='text-black'
          type='text'
          placeholder='Search a anime'
          value={anime}
          onChange={handleChange}
        />
      </form>
    </header>
  )
}
