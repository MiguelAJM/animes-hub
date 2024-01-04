import HeaderAnime from './anime/HeaderAnime'
import Divider from './elements/Divider'

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <section className='relative flex flex-col justify-between gap-4 md:gap-8 ml-0 md:ml-16 lg:ml-28 z-50'>
      <div className='flex flex-col gap-4 md:gap-8'>
        <HeaderAnime />
        <Divider styles='border-white/20' />
        {children}
        <Divider styles='border-white/20' />
      </div>
    </section>
  )
}
