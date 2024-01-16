import FooterAnime from './anime/FooterAnime'
import HeaderAnime from './anime/HeaderAnime'
import Divider from './elements/Divider'

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <section className='relative min-h-[calc(100vh_-_64px)] flex flex-col justify-between gap-4 md:gap-8 ml-0 md:ml-16 lg:ml-28 z-50'>
      <HeaderAnime />
      <div className='flex flex-col justify-between flex-1'>
        <Divider styles='border-white/20' />
        {children}
        <Divider styles='border-white/20' />
      </div>
      <FooterAnime />
    </section>
  )
}
