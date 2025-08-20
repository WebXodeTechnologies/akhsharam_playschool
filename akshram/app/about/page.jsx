import React from 'react'
import AboutHero from '@/app/components/AboutHero.jsx'
import AboutMission from '@/app/components/AboutMission.jsx'
import AboutFounder from '@/app/components/AboutFounder.jsx'
import AboutTeam from '@/app/components/AboutTeam.jsx'


// 👇 Page-level metadata for SEO
export const metadata = {
  title: 'About Us | Akhsharam Play School Play School Namakkal',
  description:
    'Learn more about Akhsharam Play School Play School in Namakkal – our vision, mission, founder’s message, and dedicated team shaping the future of early childhood education.',
  keywords: [
    'About Akhsharam Play School Play School',
    'Akhsharam Play School Play School Namakkal',
    'Play school mission',
    'Montessori education Namakkal',
    'Pre-school teachers Namakkal',
    'Nursery school staff Namakkal',
    'Child education vision Namakkal',
  ],
  openGraph: {
    title: 'About Us | Akhsharam Play School Play School Namakkal',
    description:
      'Discover Akhsharam Play School Play School’s mission, vision, and dedicated team in Namakkal. Providing nurturing and Montessori-based early childhood education.',
    url: 'https://akhsharam-playschool.vercel.app/about', // update with real domain
    siteName: 'Akhsharam Play School Play School',
    images: [
      {
        url: 'akhsharam_playschool\Akhsharam Play School\app\favicon.ico', // put a relevant image in public/
        width: 1200,
        height: 630,
        alt: 'Akhsharam Play School Play School - About Us',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
}
const page = () => {
  return (
    <div>
      <AboutHero />
      <AboutMission />
      <AboutFounder />
      <AboutTeam />
    </div>
  )
}

export default page