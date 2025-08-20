import React from 'react'
import GalleryImages from '@/app/components/GalleryImages'


export const metadata = {
  title: 'Gallery | Akshram Play School Namakkal - Student Events & Festival Photos',
  description:
    'Explore the vibrant gallery of Akshram Play School in Namakkal. View photos of student activities, cultural events, festivals, and memorable moments from our preschool community.',
  keywords: [
    'Akshram Play School Gallery',
    'Play school photos Namakkal',
    'Student event photos Namakkal',
    'Preschool festival celebrations',
    'Nursery school activities Namakkal',
    'Kindergarten cultural events',
    'Akshram Play School memories',
  ],
  openGraph: {
    title: 'Gallery | Akshram Play School Namakkal',
    description:
      'Discover student events, festival celebrations, and memorable moments at Akshram Play School in Namakkal.',
    url: 'https://yourdomain.com/gallery', // update with actual domain
    siteName: 'Akshram Play School',
    images: [
      {
        url: '/og-image-gallery.jpg', // put a featured gallery image in /public
        width: 1200,
        height: 630,
        alt: 'Akshram Play School Gallery - Student & Festival Photos',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
}
const page = () => {
  return (
    <div>
      <GalleryImages />
    </div>
  )
}

export default page