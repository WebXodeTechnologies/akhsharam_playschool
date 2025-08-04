import React from 'react'
import ContactFirst from '@/app/components/ContactFirst.jsx'
import ContactLead from '@/app/components/ContactLead.jsx'
import ContactAccordion from '@/app/components/ContactAccordian.jsx'
import ContactMap from '@/app/components/ContactMap.jsx'

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
