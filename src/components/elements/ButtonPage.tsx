'use client'
import { Animes } from '@/interfaces/animes'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

interface Props {
  data: Animes
}

export default function ButtonPage({ data }: Props) {
  const [currentPage, setCurrentPage] = useState(data.pagination.current_page)

  let LAST_PAGE = data.pagination.last_visible_page
  let DISABLE_CURRENT_PAGE = currentPage === 1
  let DISABLE_LAST_PAGE = currentPage === LAST_PAGE

  const router = useRouter()

  useEffect(() => {
    if (currentPage <= 1) {
      router.push('/')
    }
  }, [currentPage, router])

  const handlePageChange = (newPage: number) => {
    if (currentPage >= 1) {
      setCurrentPage(newPage)
      router.push(`/anime/page/${newPage}`, { scroll: false })
    }
  }

  return (
    <div className='flex items-center gap-2'>
      <button
        className={`px-8 py-2 rounded-xl font-bold text-white duration-300 ease-in-out transition-all ${
          DISABLE_CURRENT_PAGE ? 'bg-[#DB1057] opacity-75' : 'bg-[#DB1057]'
        }`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={DISABLE_CURRENT_PAGE}
      >
        Prev
      </button>
      <button
        className={`px-8 py-2 rounded-xl font-bold text-black duration-300 ease-in-out transition-all ${
          DISABLE_LAST_PAGE ? 'bg-[#16B55A] opacity-75' : 'bg-[#16B55A]'
        }`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={DISABLE_LAST_PAGE}
      >
        Next
      </button>
    </div>
  )
}
