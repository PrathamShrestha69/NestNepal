import Image from 'next/image'
import React from 'react'

import WhatsappButton from '../WhatsappButton'

const ImageSection = () => {
  return (
    <section>
      <div className='bg-[#F7F7F7] rounded-2xl overflow-hidden'>
        <div className='grid lg:grid-cols-2 items-center gap-8 p-6 lg:px-20'>
          <div className='space-y-10'>
            <Image src='/Footers/icon.png' alt='Workspace icons' width={500} height={120} />
            <h2 className='text-2xl lg:text-3xl font-semibold'>Prefer to talk to sales directly?</h2>
            <p className='text-base lg:text-lg text-gray-700'>
              तपाईको company को unique requirements अनुसार तयार गरिएको solution संग efficiency र collaboration
              maximize गर्नुहोस्
            </p>
            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4'>
              <WhatsappButton text='Message On WhatsApp' />
              <p className='text-sm text-gray-700'>Call: +977 9864333517</p>
            </div>
          </div>

          <div className='relative flex justify-center lg:justify-end'>
            <div className='relative w-[360px] h-[360px] lg:w-[590px] lg:h-[420px] right-0 lg:translate-x-35 lg:translate-y-13 translate-x-1 translate-y-24'>
              <Image
                src='/Footers/color.png'
                alt=''
                aria-hidden='true'
                fill
                sizes='(min-width: 1024px) 420px, (min-width: 640px) 360px, 280px'
                className='object-contain'
              />
              <Image
                src='/Footers/dd.png'
                alt='Sales representative'
                fill
                sizes='(min-width: 1024px) 420px, (min-width: 640px) 360px, 280px'
                className='object-contain -translate-y-13'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImageSection
