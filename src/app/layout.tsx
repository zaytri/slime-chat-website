import Header from '@/components/header'
import './globals.css'

import Footer from '@/components/footer'
import clsx from 'clsx'
import fontClasses from '@/helpers/fonts'

export const metadata = {
  title: 'SlimeChat',
  description: "It's time for slime!",
  icons: {
    icon: [
      { url: '/app-icon/favicon-16x16.png', sizes: '16x16' },
      { url: '/app-icon/favicon-32x32.png', sizes: '32x32' },
    ],
    apple: '/app-icon/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang='en' className={clsx(fontClasses, 'h-full', 'w-full')}>
      <body className='flex h-screen flex-col items-center bg-lime-100'>
        <Header />
        <main className='max-w-lg flex-1 flex-col pt-10'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
