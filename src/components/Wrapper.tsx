import HeaderAnime from './anime/HeaderAnime'
import Divider from './elements/Divider'

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <section className='relative flex flex-col justify-between gap-8 ml-28 z-50'>
      <div className='flex flex-col gap-8'>
        <HeaderAnime />
        <Divider styles='border-white/20' />
        {children}
        <Divider styles='border-white/20' />
      </div>
    </section>
  )
}
