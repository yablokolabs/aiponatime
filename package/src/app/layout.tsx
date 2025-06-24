import { Urbanist, Fredoka } from 'next/font/google'
import RemoveNextBadge from '@/components/RemoveNextBadge'
import './globals.css'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { ThemeProvider } from '@/theme/ThemeProvider'
import { KidsBackground } from '@/components/Common/KidsBackground'
import { MagicDust } from '@/components/Common/MagicDust'
import ScrollToTop from '@/components/ScrollToTop'
import Aoscompo from '@/utils/aos'
import { Metadata } from 'next'
import { ReactNode } from 'react'

const urbanist = Urbanist({ 
  subsets: ['latin'],
  variable: '--font-urbanist',
})

const fredoka = Fredoka({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-fredoka',
})

export const metadata: Metadata = {
  title: 'AiPonATime™ | Personalized AI Storybooks for Kids',
  description: 'Create magical, personalized storybooks for children with AI. Spark their love of reading with custom stories where they are the hero!',
  metadataBase: new URL('https://aiponatime.com'),
  icons: {
    icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/favicon.ico`,
    apple: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/apple-touch-icon.png`,
    shortcut: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/favicon.ico`
  },
  openGraph: {
    title: 'AiPonATime - Magical AI Storytelling for Kids',
    description: 'Create personalized, colorful storybooks that bring your child\'s imagination to life with AI-powered storytelling.',
    images: [
      {
        url: '/images/Logo-pica.png',
        width: 800,
        height: 600,
        alt: 'AiPonATime Logo',
      },
    ],
  },
  other: {
    'ahrefs-site-verification': 'ad920c0040aa681f970b61367c5146881185afa5a15860d0668eee43ced884ec',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {

  return (
    <html 
      lang="en" 
      suppressHydrationWarning
      className={`${urbanist.variable} ${fredoka.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 overflow-x-hidden">
        <ThemeProvider>
          <KidsBackground />
          <MagicDust />
          <div className="relative z-10 flex flex-col min-h-screen">
            <RemoveNextBadge />
            <Aoscompo>
              <div className='flex-1 flex flex-col'>
                <Header />
                <main className='flex-1'>
                  {children}
                </main>
                <Footer />
              </div>
            </Aoscompo>
            <ScrollToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
