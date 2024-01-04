import NavLinks from "./NavLinks";

export default function Sidebar() {
  return (
    <header className='absolute invisible md:visible md:fixed w-full md:w-16 h-auto md:h-[calc(100%_-_64px)] rounded-xl xs:rounded-full bg-zinc-200 dark:bg-dark'>
      <nav className='w-full h-full flex flex-col justify-center items-center py-4 px-3 bg-dark rounded-full'>
        <NavLinks />
      </nav>
    </header>
  )
}
