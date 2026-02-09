"use client"
import React from 'react'
import QuotationButton from '../QuotationButton'
import Image from 'next/image'

interface textType {
  key: number,
  heading: String,
  para: String
}

const texts = [
  {
    key: 1,
    heading: "Premium AI built-in",
    para: "Do your best work faster with the Gemini app, NotebookLM, and Gemini in Gmail, Docs, Sheets, and more."
  },
  {
    key: 2,
    heading: "Tools born in the Cloud",
    para: "Collaborate in real time, from anydevice, across tools that are always up-to-date."
  },
  {
    key: 3,
    heading: "Enterprise-grade security",
    para: "Protect your emails, files, and meetings with AI-powered security and compliance controls."
  },
]

const HiddenSection = () => {
  return (
    <section className='font-[Helvetica] lg:flex lg:flex-col items-center hidden'>
      <div className='lg:flex lg:flex-col  text-3xl lg:text-5xl justify-center text-center mt-5 lg:mt-10 font-semibold'>
        <h1><span className='text-[#146DE1]'>सबै</span> Tools <span>एउटै</span> Platform मा</h1>
        <h1 className='text-[#4285F4]'>Google Workspace</h1>
      </div>
      <div className='flex flex-row gap-10 mt-30 px-15'>
        {texts.map((text: textType) => {
          return (
            <div key={text.key} className='flex flex-col gap-3 text-center'>
              <h1 className='text-3xl font-semibold'>{text.heading}</h1>
              <p className='text-xl line-clamp-3'>{text.para}</p>
            </div>
          )
        })}
      </div>
      <div className='mt-15 justify-center items-center'>
        <QuotationButton />
      </div>
      <div className='mt-15 flex flex-col'>
        <h1 className='font-bold text-xl text-center mb-15'>Google WorkSpace Includes:</h1>
        <Image src="/icons/everyIcons.png" alt="icons" height={100} width={10000} />
      </div>
    </section>
  )
}

export default HiddenSection