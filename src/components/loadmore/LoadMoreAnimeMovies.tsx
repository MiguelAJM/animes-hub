/* eslint-disable react-hooks/exhaustive-deps */

'use client'
import { useEffect, useState } from 'react'
import { Bars } from 'react-loader-spinner'
import { useInView } from 'react-intersection-observer'
import { getMoviesAction } from '@/utils/actions/getMoviesAction'

type DataProps = JSX.Element

export default function LoadMoreAnimeMovies() {
  const { ref, inView } = useInView()
  const [data, setData] = useState<DataProps[]>([])
  const [page, setPage] = useState(2)

  useEffect(() => {
    if (inView) {
      getMoviesAction(page).then((res) => {
        setData([...data, ...res])
        setPage(page + 1)
      })
    }
  }, [inView])

  const totalItems = page * 24 - 48 > data.length

  return (
    <>
      <ul className='grid grid-cols-6 gap-4'>{data}</ul>

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
