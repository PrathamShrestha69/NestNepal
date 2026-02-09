"use client"

import Image from 'next/image'
import React, { useState } from 'react'

const items = [
  {
    title: 'Your files, all in one place',
    body: 'Edit and organize Google Docs, Sheets, Slides, Microsoft Office files, and PDFs in real-time. Plus, access over 100 other file types!',
  },
  {
    title: 'Annotate PDFs',
    body: 'Add comments, highlight important sections, and mark up PDFs directly in Google Drive without downloading or using extensions.',
  },
  {
    title: 'AI-powered search',
    body: 'Find what you need instantly with intelligent search that understands context and helps you locate files faster.',
  },
  {
    title: 'Activity view',
    body: 'Track changes, see who edited what, and when with a complete activity log of all your files.',
  },
]

const FourthSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)

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
      <div className='relative'>
        <h1 className='text-4xl lg:text-5xl font-semibold text-center '>Brands using Google Workspace to  <br /> succeed online,<span className='text-[#146DE1]'>कसरी?</span></h1>
        <p className='text-lg text-black text-center mt-5'>कसरी teams Google Workspace सँग productivity </p>
        <p className='text-lg text-black text-center'>बढाउँछन् र समय बचत गर्छन्।</p>
      </div>

      <div className='grid lg:grid-cols-2 gap-8 items-center mt-10'>
        <div className='flex justify-center'>
          <Image className='spin-slow' src="/others/circular.png" alt="circle" height={400} width={400} />
        </div>
        <div className='space-y-6'>
          {items.map((item, index) => {
            const isActive = index === activeIndex

            return (
              <button
                key={item.title}
                type='button'
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left border-l-2 pl-4 transition-colors ${isActive ? 'border-[#146DE1] text-black' : 'border-gray-300 text-gray-600'
                  }`}
              >
                <h3 className='text-2xl font-semibold mb-2 cursor-pointer'>{item.title}</h3>
                {isActive ? <p className='text-lg text-gray-700'>{item.body}</p> : null}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FourthSection