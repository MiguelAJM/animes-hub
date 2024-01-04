import NavLinks from "./NavLinks";

export default function Sidebar() {
  return (
    <header className='hidden md:block md:fixed w-12 lg:w-16 h-[calc(100%_-_64px)] rounded-full bg-zinc-200 dark:bg-dark'>
      <nav className='w-full h-full flex flex-col justify-center items-center py-2 lg:py-4 px-2 lg:px-3 bg-dark rounded-full'>
        <NavLinks />
      </nav>
    </header>
  )
}
