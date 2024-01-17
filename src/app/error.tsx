'use client'
import Wrapper from '@/components/Wrapper'

interface Props {
  reset: () => void
}

export default function Error({ reset }: Props) {
  return (
    <Wrapper>
      <div className='flex flex-col items-center'>
        <h2 className='text-xl md:text-7xl font-bold'>Ups! An ocurred a error</h2>
        <button
          className='text-lg md:text-2xl text-brand-2 mt-8 hover:underline'
          onClick={() => reset()}
        >
          Try Again
        </button>
      </div>
    </Wrapper>
  )
}
