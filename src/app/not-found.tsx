import Wrapper from '@/components/Wrapper'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Wrapper>
      <div className='flex flex-col items-center'>
        <h1 className='text-2xl md:text-8xl font-bold'>Error 404</h1>
        <Link className='text-lg md:text-2xl text-brand-2 mt-8 hover:underline' href={'/'}>Back to home</Link>
      </div>
    </Wrapper>
  )
}
