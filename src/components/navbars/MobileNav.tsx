import MobileNavLinks from './MobileNavLinks'
import MobileSearch from './MobileSearch'

export default function MobileNav() {
  return (
    <>
      <MobileSearch />
      <header className='sticky md:hidden bottom-0 left-0 right-0 w-full h-20 bg-dark z-[100]'>
        <nav className='w-full h-full'>
          <MobileNavLinks />
        </nav>
      </header>
    </>
  )
}
