'use client'
import Wrapper from '@/components/Wrapper'

interface Props {
  reset: () => void
}

export default function Error({ reset }: Props) {
  return (
    <Wrapper>
      <div className='w-full h-[calc(100vh_-_380px)] grid place-content-center'>
        <h2 className='text-7xl font-bold'>Ups! An ocurred a error</h2>
        <button
          className='text-2xl text-brand-2 text-center mt-8 hover:underline'
          onClick={() => reset()}
        >
          Try Again
        </button>
      </div>
    </Wrapper>
  )
}
