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

export const metadata: Metadata = {
  title: {
    default: 'AIponATime™ | AI-Powered Personalized Storytelling for Kids',
    template: '%s | AIponATime™',
  },
  description: 'Create magical, personalized storybooks for children with AI. Spark their love of reading with custom stories where they are the hero!',
  metadataBase: new URL('https://aiponatime.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'AIponATime™ - Magical AI Storytelling for Kids',
    description: 'Create personalized, colorful storybooks that bring your child\'s imagination to life with AI-powered storytelling.',
    url: 'https://aiponatime.com',
    siteName: 'AIponATime',
    images: [
      {
        url: '/images/Logo-pica.png',
        width: 800,
        height: 600,
        alt: 'AIponATime - Personalized Storybooks',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIponATime™ - AI-Powered Personalized Storytelling',
    description: 'Create magical, personalized storybooks for children with AI.',
    images: ['/images/Logo-pica.png'],
  },
  other: {
    'ahrefs-site-verification': 'ad920c0040aa681f970b61367c5146881185afa5a15860d0668eee43ced884ec',
  },
  icons: {
    icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/favicon.ico`,
    apple: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/apple-touch-icon.png`,
    shortcut: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/favicon.ico`
  },
}

const urbanist = Urbanist({ 
  subsets: ['latin'],
  variable: '--font-urbanist',
})

const fredoka = Fredoka({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-fredoka',
})

// Single source of truth for metadata

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
