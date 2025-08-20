import React from 'react'
import ContactFirst from '@/app/components/ContactFirst.jsx'
import ContactLead from '@/app/components/ContactLead.jsx'
import ContactAccordion from '@/app/components/ContactAccordian.jsx'
import ContactMap from '@/app/components/ContactMap.jsx'

export const metadata = {
  title: 'Contact Akshram Play School | Get in Touch with Us in Namakkal',
  description:
    'Reach out to Akshram Play School in Namakkal for admission enquiries, location details, or any questions. Call us, email us, or visit our campus today.',
  keywords: [
    'Contact Akshram Play School',
    'Play school contact Namakkal',
    'Pre-school admission enquiry Namakkal',
    'Nursery school phone number Namakkal',
    'Montessori school location Namakkal',
    'Akshram Play School email',
    'Best play school in Namakkal contact',
  ],
  openGraph: {
    title: 'Contact Akshram Play School | Namakkal',
    description:
      'Easily connect with Akshram Play School in Namakkal. Admission enquiries, directions, email, and phone details available here.',
    url: 'https://yourdomain.com/contact', // update with actual domain
    siteName: 'Akshram Play School',
    images: [
      {
        url: '/og-image-contact.jpg', // place an image in /public
        width: 1200,
        height: 630,
        alt: 'Contact Akshram Play School in Namakkal',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
}

const page = () => {
  return (
    <div>
      <ContactFirst />
      <ContactLead />
      <ContactAccordion />
      <ContactMap />
      
    </div>
  )
}

export default page
