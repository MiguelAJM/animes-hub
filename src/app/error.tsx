'use client'
import React from 'react'

interface Props {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: Props) {
  return (
    <div>
      <h1>Ups! {error.message}</h1>
      <button onClick={() => reset()}>Reset</button>
    </div>
  )
}
