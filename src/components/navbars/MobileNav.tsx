import MobileNavLinks from './MobileNavLinks'

export default function MobileNav() {
  return (
    <header className='sticky md:hidden bottom-0 left-0 right-0 w-full h-20 bg-dark z-50'>
      <nav className='w-full h-full'>
        <MobileNavLinks />
      </nav>
    </header>
  )
}
