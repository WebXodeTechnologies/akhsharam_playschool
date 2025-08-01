import './globals.css'
import { Poppins } from 'next/font/google'
import HeaderNav from '@/app/components/HeaderNav'
import Footer from '@/app/components/footer'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Akshram Play School',
  description: 'Nurturing young minds with care and creativity.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <HeaderNav />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
