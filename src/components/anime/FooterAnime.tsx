import { IconHeartFilled } from "@tabler/icons-react";
import Link from "next/link";

export default function FooterAnime() {
  return (
    <footer className='w-full flex justify-between relative items-center bg-zinc-200 dark:bg-dark rounded-xl xs:rounded-full px-4 sm:px-8 py-4 gap-3 text-xs md:text-lg mb-20 md:mb-0'>
      <div className='flex items-center gap-1 xs:gap-2 '>
        <span className='hidden xs:block'>Site coded by </span>
        <span className='text-red-500'>
          <IconHeartFilled />
        </span>{' '}
        <Link
          className='transition duration-250 ease-in-out hover:text-brand underline'
          target='_blank'
          href={'https://github.com/MiguelAJM'}
        >
          Miguel Angel
        </Link>
      </div>
      <div>
        Powered by{' '}
        <Link
          className='transition duration-250 ease-in-out hover:text-brand underline'
          target='_blank'
          href={'https://jikan.moe/'}
        >
          Jikan
        </Link>{' '}
        API
      </div>
    </footer>
  )
}
