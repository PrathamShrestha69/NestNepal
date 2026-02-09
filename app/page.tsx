import FirstSection from '@/components/allsection/FirstSection'
import HiddenSection from '@/components/allsection/HiddenSection'
import SecondSection from '@/components/allsection/SecondSection'
import React from 'react'

const page = () => {
  return (
    <div>
      <FirstSection/>
      <SecondSection/>
      <HiddenSection/>
    </div>
  )
}

export default page