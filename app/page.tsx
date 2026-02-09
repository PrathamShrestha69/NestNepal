import FAQsection from '@/components/allsection/FAQsection'
import FirstSection from '@/components/allsection/FirstSection'
import FourthSection from '@/components/allsection/FourthSection'
import HiddenSection from '@/components/allsection/HiddenSection'
import ImageSection from '@/components/allsection/ImageSection'
import SecondSection from '@/components/allsection/SecondSection'
import ThirdSection from '@/components/allsection/ThirdSection'
import React from 'react'

const page = () => {
  return (
    <div>
      <FirstSection/>
      <SecondSection/>
      <HiddenSection/>
      <ThirdSection/>
      <FourthSection/>
      <FAQsection/>
      <ImageSection/>
    </div>
  )
}

export default page