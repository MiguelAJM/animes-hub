import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'
import Sidebar from '@/components/Navs/Sidebar'

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
        className={`${lato.className} bg-lightest dark:bg-black text-darkest dark:text-lightest p-8`}
      >
        <main className='relative flex flex-col container mx-auto transition-all duration-300 ease-in-out'>
          <Sidebar />
          {children}
        </main>
      </body>
    </html>
  )
}
