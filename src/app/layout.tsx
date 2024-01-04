import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'
import Sidebar from '@/components/navs/Sidebar'
import FooterAnime from '@/components/anime/FooterAnime'

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
        className={`${lato.className} bg-lightest dark:bg-black text-darkest dark:text-lightest p-8 `}
      >
        <main className='relative flex flex-col justify-between container mx-auto transition-all duration-300 ease-in-out min-h-[calc(100vh_-_64px)]'>
          <Sidebar />
          {children}
          <FooterAnime/>
        </main>
      </body>
    </html>
  )
}
