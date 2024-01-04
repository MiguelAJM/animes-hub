'use client'
import React from 'react'
import Wrapper from './Wrapper'
import { Bars } from 'react-loader-spinner'

export default function Loader() {
  return (
    <Wrapper>
      <div className='w-full min-h-[calc(100vh_-_332px)] md:min-h-[calc(100vh_-_380px)] grid place-content-center'>
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
