import '../styles/globals.css'

import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Menu } from '@/components/Menu'

export const metadata = {
  title: {
    default: 'Pedro Rodrigues',
    template: '%s | Pedro Rodrigues'
  },
  robots: {
    index: true,
    follow: true,
  },
  description: "Personal page of a 17 year old student, welcome",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className} >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='bg-bg bg-app text-white '>
        <div className="z-10 relative h-screen lg:p-20 max-lg:p-2 flex lg:items-center justify-center ">
          <div className="bg-[#232135] overflow-hidden border border-[#72707D] w-full lg:max-w-[1480px] aspect-video shadow-md shadow-black/20 rounded-lg grid grid-rows-layout">
            <Header />

            <div className="grid grid-cols-editor max-h-full">
              <Menu />
              {children}
            </div>

            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
