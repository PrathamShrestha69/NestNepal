import React from 'react'
import Marquee from '../Marquee'
import { Icon } from '@iconify/react'
import PricingAndFeatures from '../PricingAndFeatures'

const SecondSection = () => {
  return (
    <section className='relative mt-15 lg:mt-10 font-[Helvetica] overflow-hidden'>
      <div
        className='hidden lg:flex pointer-events-none absolute left-0 top-1/2 h-72 w-72 -translate-y-1/2 blur-3xl opacity-70'
        style={{
          background:
            'linear-gradient(90deg, rgba(33, 123, 254, 0.4) 5.18%, rgba(7, 142, 251, 0.4) 31.68%, rgba(172, 135, 235, 0.4) 54.88%, rgba(238, 77, 93, 0.4) 96.92%)'
        }}
      />
      <div
        className='hidden lg:flex pointer-events-none absolute -right-16 top-1/2 h-72 w-72 -translate-y-1/2 blur-3xl opacity-70'
        style={{
          background:
            'linear-gradient(90deg, rgba(33, 123, 254, 0.4) 5.18%, rgba(7, 142, 251, 0.4) 31.68%, rgba(172, 135, 235, 0.4) 54.88%, rgba(238, 77, 93, 0.4) 96.92%)'
        }}
      />
      <div className='relative flex flex-col'>
        <p className='text-zinc-500 text-xl text-center'>Trusted by 1,000+ Nepali businesses on </p>
        <p className='text-zinc-500 text-xl text-center'>their growth journey. <span className='text-[#146DE1]'>अब तपाईंको team तयार छ?</span></p>
      </div>
      <Marquee />
      <div className='mt-15'>
        <div className='relative z-10 flex flex-col items-center'>
          <div className='text-4xl lg:text-5xl font-semibold text-center '>
            <h1 >के <span className='text-[#146DE1]'>Google Workspace</span> तपाईंको</h1>
            <h1 className=' mt-2 lg:mt-3'>business growth <span className='text-[#146DE1]'>को लागि</span> best fit <span className='text-[#146DE1]'>हो</span></h1>
          </div>
          <div className='mt-5 text-center'>
            <p className='text-lg w-96'>Tailored Plans तपाईंको Online Presence को हरेक पहलुलाई Elevate र Empower गर्न</p>
          </div>
          {/* icons */}
          <div className='items-center gap-5 flex lg:flex-row flex-row mt-5'>
            <Icon icon="logos:google-gmail" width={24}
              height={24} />
            <Icon icon="logos:google-calendar" width={24}
              height={24} />
            <Icon icon="logos:google-drive" width={24}
              height={24} />
            <svg
              viewBox="0 0 254 349.247"
              xmlns="http://www.w3.org/2000/svg"
              width={23}
              height={23}
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
            <Icon icon="logos:google-meet" width={24}
              height={24} />
            <Icon icon="vscode-icons:file-type-gemini" width={24}
              height={24} />
          </div>
          <PricingAndFeatures/>
        </div>
      </div>
    </section>
  )
}

export default SecondSection