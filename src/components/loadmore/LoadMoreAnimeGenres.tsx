/* eslint-disable react-hooks/exhaustive-deps */

'use client'
import { useEffect, useState } from 'react'
import { Bars } from 'react-loader-spinner'
import { useInView } from 'react-intersection-observer'
import { getGenresAction } from '@/utils/actions/getGenresAction'
import { useParams } from 'next/navigation'

type DataProps = JSX.Element

export default function LoadMoreAnimeGenres() {
  const { ref, inView } = useInView()
  const [data, setData] = useState<DataProps[]>([])
  const [page, setPage] = useState(2)

  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    if (inView) {
      getGenresAction(id, page).then((res) => {
        setData([...data, ...res])
        setPage(page + 1)
      })
    }
  }, [inView])

  const totalItems = page * 24 - 48 > data.length

  return (
    <>
      <ul className='grid grid-cols-6 gap-2 md:gap-4'>{data}</ul>
      {!totalItems && (
        <div ref={ref} className='w-full flex justify-center'>
          <Bars
            height='64'
            width='64'
            color='#777DFE'
            ariaLabel='bars-loading'
            visible={true}
          />
        </div>
      )}
    </>
  )
}