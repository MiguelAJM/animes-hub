import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import { Toaster } from 'sonner'
import FooterAnime from '@/components/anime/FooterAnime'
import './globals.css'
import Sidebar from '@/components/navbars/Sidebar'
import MobileNav from '@/components/navbars/MobileNav'

const lato = Lato({ subsets: ['latin'], weight: ['300', '400', '700', '900'] })

export const metadata: Metadata = {
  title: 'AnimeHub - Search your favorites animes.',
  description: 'Search the populars and upcoming animes!'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html className='dark' lang='en'>
      <Toaster position='top-center' richColors />
      <body
        className={`${lato.className} relative bg-lightest dark:bg-darkest text-darkest dark:text-lightest`}
      >
        <main className='relative flex flex-col md:justify-between container mx-auto transition-all duration-300 ease-in-out min-h-[calc(100vh_-_80px)] md:min-h-[calc(100vh_-_64px)] px-2.5 md:px-8 md:py-8'>
          <Sidebar />
          {children}
        </main>
        <MobileNav />
      </body>
    </html>
  )
}
