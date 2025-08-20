import './globals.css'
import { Poppins } from 'next/font/google'
import HeaderNav from '@/app/components/HeaderNav'
import Footer1 from "@/app/components/FooterMain";
import FooterMain from '@/app/components/FooterMain';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Akshram Play School | Best Nursery & Pre-School in Namakkal',
  description:
    'Akshram Play School in Namakkal offers a nurturing, fun, and safe environment for early childhood education. Trusted by parents for our Montessori-based curriculum, experienced faculty, and creative learning spaces.',
  keywords: [
    'Akshram Play School',
    'Best nursery school in Namakkal',
    'Pre-school in Namakkal',
    'Namakkal play school',
    'Montessori school Namakkal',
    'Early childhood education',
    'Kindergarten Namakkal',
    'Top rated nursery Namakkal',
    'Child development Namakkal',
    'Safe school for kids Namakkal',
    'Creative learning for children',
    'Namakkal preschool admission 2025',
  ],
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <HeaderNav />
        <main className="min-h-screen">{children}</main>
        <FooterMain />
      </body>
    </html>
  )
}
