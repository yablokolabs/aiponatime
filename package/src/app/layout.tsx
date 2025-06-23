import { Urbanist } from 'next/font/google'
import RemoveNextBadge from '@/components/RemoveNextBadge'
import './globals.css'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
// import { ThemeProvider } from 'next-themes'
import ScrollToTop from '@/components/ScrollToTop'
import Aoscompo from '@/utils/aos'
import { Metadata } from 'next'

const font = Urbanist({ subsets: ['latin'] })

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
    title: 'AiPonATime™ | Personalized AI Storybooks for Kids',
    description: 'Create magical, personalized storybooks for children with AI. Spark their love of reading with custom stories where they are the hero!',
    images: [
      {
        url: '/images/Logo-pica.png',
        width: 800,
        height: 600,
        alt: 'AiPonATime Logo',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${font.className}`}>
        <RemoveNextBadge />
        <Aoscompo>
          <Header />
          {children}
          <Footer />
        </Aoscompo>
        <ScrollToTop />
      </body>
    </html>
  )
}
