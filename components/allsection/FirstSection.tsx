import { Icon } from '@iconify/react'
import Image from 'next/image'
import React from 'react'
import QuotationButton from '../QuotationButton'

const FirstSection = () => {
  return (
    <section className='relative mt-5 lg:mt-10 font-[Helvetica] overflow-hidden'>
      <div
        className='hidden lg:flex pointer-events-none absolute left-0 top-64 h-72 w-72 -translate-y-1/2 blur-3xl opacity-70'
        style={{
          background:
            'linear-gradient(90deg, rgba(33, 123, 254, 0.4) 5.18%, rgba(7, 142, 251, 0.4) 31.68%, rgba(172, 135, 235, 0.4) 54.88%, rgba(238, 77, 93, 0.4) 96.92%)'
        }}
      />
      <div
        className='hidden lg:flex pointer-events-none absolute -right-16 top-64 h-72 w-72 -translate-y-1/2 blur-3xl opacity-70'
        style={{
          background:
            'linear-gradient(90deg, rgba(33, 123, 254, 0.4) 5.18%, rgba(7, 142, 251, 0.4) 31.68%, rgba(172, 135, 235, 0.4) 54.88%, rgba(238, 77, 93, 0.4) 96.92%)'
        }}
      />
      <div className='relative z-10 flex flex-col items-center'>
        <h1 className='text-[#4285F4] text-4xl lg:text-5xl font-semibold text-center '>Google Workspace</h1>
        {/* icons */}
        <div className='items-center gap-5 flex lg:flex-row flex-row mt-5'>
          <Icon icon="logos:google-gmail" width={36}
            height={36} />
          <Icon icon="logos:google-calendar" width={32}
            height={32} />
          <Icon icon="logos:google-drive" width={32}
            height={32} />
          <svg
            viewBox="0 0 254 349.247"
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
          >
            <g transform="scale(11.905878)">
              <path fill="#00832D" d="M7.334,22H0v5.334c0,1.105,0.895,2,2,2h5.334V22z" />
              <path fill="#FFBA00" d="M7.334,0H2C0.895,0,0,0.895,0,2v20h7.334V7.334H14V0H7.334z" />
              <path fill="#0066DA" d="M21.334,22H14v7.334h5.334c1.105,0,2-0.895,2-2V22z" />
              <path fill="#00AC47" d="M14,22H7.334v7.334H14V22z" />
              <path fill="#2684FC" d="M14,7.334V22h7.334V7.334H14z" />
              <path fill="#EA4335" d="M14,0v7.334h7.334L14,0z" />
            </g>
          </svg>
          <Icon icon="logos:google-meet" width={32}
            height={32} />
        </div>
        <div className='text-3xl lg:text-5xl justify-center text-center mt-5 lg:mt-10 font-semibold'>
          <p><span className='text-[#146DE1]'>किन केही </span>Businesses efficiently <span className='text-[#146DE1]'>चल्छन्, र केही</span></p>
          <div className='text-3xl lg:text-5xl justify-center text-center lg:mt-2 font-semibold'>
            daily operations मै struggle <span className='text-[#146DE1]'>गर्छन्?</span>
          </div>
        </div>
        <div className='mt-5'>
          <p className='text-lg text-black text-center'>Reason luck,ads <span>वा</span> team size <span >होइन</span>. Reason <span>हो</span> right partner with right tools.</p>
        </div>
        {/* tickets */}
        <div className='mt-5 lg:mt-10'>
          <Image src="/icons/ticket.png" alt="tickets"
            height={50} width={300} className='lg:flex hidden' />
          <Image src="/icons/ticket.png" alt="tickets"
            height={44} width={250} className='lg:hidden flex ' />
        </div>
        {/* desktop text */}
        <div className='text-lg text-center lg:flex hidden mt-10'>
          <p>Everything Your Business Needs to Work Smarter. A complete Google</p>
        </div>
        <div className='text-lg text-center lg:flex hidden'>
          <p> Workspace setup done right by Nest Nepal.</p>
        </div>
        {/* Mobile text */}
        <div className=' text-center lg:hidden flex '>
          <p className=' text-lg text-black text-center'>Reason luck,ads <span >वा</span> team size <span >होइन</span>. Reason <span>हो</span> right partner with right tools.</p>
        </div>
        <div className='mt-10 flex flex-col lg:flex-row lg:gap-10 gap-2 w-full items-center justify-center'>
          <button className='bg-[#F25277] hover:bg-[#ca5a74] rounded-full px-5 py-3 text-sm text-white font-light cursor-pointer lg:w-auto w-full'>15 mins • Free Demo</button>
          <QuotationButton />
        </div>
      </div>
      <div className='mt-15'>
        <Image alt="video" src="/icons/videoSkeleton.png" height={5000} width={5000} className='hidden lg:flex'></Image>
        <Image alt="video" src="/icons/videoMobile.png" height={5000} width={5000} className='lg:hidden flex'></Image>
        <p className='text-center mt-3 text-sm lg:text-md'>Get A Free 15 Min Demo · See if it fits your business</p>
      </div>
    </section>
  )
}

export default FirstSection