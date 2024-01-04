'use client'

import { Bars } from 'react-loader-spinner'

export default function LoaderCharacters() {
  return (
    <div className='w-full grid place-content-center'>
      <Bars
        height='80'
        width='80'
        color='#777DFE'
        ariaLabel='bars-loading'
        visible={true}
      />
    </div>
  )
}
