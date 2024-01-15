/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useEffect, useState } from 'react'
import { Bars } from 'react-loader-spinner'
import { useInView } from 'react-intersection-observer'
import { getAnimesAction } from '@/utils/actions/getAnimesAction'
import { Animes } from '@/interfaces/animes'
import CardAnime from '../characters/CardAnime'

interface LastPageType {
  lastPage: number
}

export default function LoadMoreAnimes({ lastPage }: LastPageType) {
  const { ref, inView } = useInView()
  const [data, setData] = useState<Animes[]>([])
  const [page, setPage] = useState(2)

  useEffect(() => {
    if (inView) {
      getAnimesAction(page).then((res) => {
        setData([...data, ...res.data])
        setPage(page + 1)
      })
    }
  }, [inView])

  return (
    <>
      <ul className='grid grid-cols-6 gap-4'>
        {data.map((item: any) => (
          <CardAnime key={item.mal_id} item={item} />
        ))}
      </ul>

      {lastPage > page && (
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
