'use client'
import { Bars } from 'react-loader-spinner'
import Wrapper from '@/components/Wrapper'

export default function Loading() {
  return (
    <Wrapper>
      <div className='w-full h-[calc(100vh_-_332px)] md:h-[calc(100vh_-_380px)] grid place-content-center'>
        <Bars
          height='320'
          width='320'
          color='#777DFE'
          ariaLabel='bars-loading'
          visible={true}
        />
      </div>
    </Wrapper>
  )
}
