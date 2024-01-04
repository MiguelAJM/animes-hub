import Wrapper from '@/components/Wrapper'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Wrapper>
      <div className='w-full h-[calc(100vh_-_380px)] grid place-content-center'>
        <h1 className='text-8xl font-bold'>Error 404</h1>
        <Link className='text-2xl text-brand-2 text-center mt-8 hover:underline' href={'/'}>Back to home</Link>
      </div>
    </Wrapper>
  )
}