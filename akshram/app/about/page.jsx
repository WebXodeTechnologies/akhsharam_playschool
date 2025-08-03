import React from 'react'
import AboutHero from '@/app/components/AboutHero.jsx'
import AboutMission from '@/app/components/AboutMission.jsx'
import AboutFounder from '@/app/components/AboutFounder.jsx'
import AboutTeam from '@/app/components/AboutTeam.jsx'

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