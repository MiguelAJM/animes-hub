'use client'
import { IconArrowBack } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'

export default function BackButton() {
  const router = useRouter()

  return (
    <button
      className='bg-white rounded-full text-dark p-3 transition duration-300 ease-in-out hover:bg-dark hover:text-white'
      onClick={() => router.push('/genres')}
    >
      <IconArrowBack />
    </button>
  )
}
