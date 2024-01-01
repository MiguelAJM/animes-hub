'use client'
import React from 'react'

interface Props {
  reset: () => void
}

export default function Error({ reset }: Props) {
  return (
    <div>
      <h1>Ups! An ocurred one error. Try again.</h1>
      <button onClick={() => reset()}>Reset</button>
    </div>
  )
}
