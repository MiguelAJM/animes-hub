'use client'
import Wrapper from './Wrapper'
import { Bars } from 'react-loader-spinner'

export default function Loader() {
  return (
    <Wrapper>
      <div className='w-full h-full grid place-content-center'>
        <Bars
          height='250'
          width='250'
          color='#777DFE'
          ariaLabel='bars-loading'
          visible={true}
        />
      </div>
    </Wrapper>
  )
}
