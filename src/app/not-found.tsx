import Wrapper from '@/components/Wrapper'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Wrapper>
      <div>
        <h1>Error 404</h1>
        <Link href={'/'}>Back to home</Link>
      </div>
    </Wrapper>
  )
}
