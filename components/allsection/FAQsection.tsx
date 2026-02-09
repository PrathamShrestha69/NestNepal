"use client"

import { Icon } from '@iconify/react'
import React, { useState } from 'react'

const faqs = [
  {
    question: 'Is Google Workspace compatible with my current email client?',
    answer: 'Yes. Google Workspace works with most email clients via IMAP/POP and supports Gmail on web and mobile for a full experience.',
  },
  {
    question: 'Can I transfer my current Google Workspace account to Nest Nepal?',
    answer: 'Yes. We can help you migrate your existing account and data with minimal downtime.',
  },
  {
    question: 'Are there any fees for transferring a domain to Nest Nepal?',
    answer: 'Domain transfer fees depend on your current registrar. We will guide you through any costs before proceeding.',
  },
  {
    question: 'Are there any hidden charges for Nest Nepal Customers?',
    answer: 'No. All pricing is transparent and shared upfront before you commit.',
  },
  {
    question: 'What all does Gsuite productivity suite include?',
    answer: 'G Suite includes Gmail, Drive, Docs, Sheets, Slides, Meet, Calendar, and Admin tools for managing users and security.',
  },
]

const FAQsection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className='max-w-4xl mx-auto mt-15'>
      <div className='text-center'>
        <h2 className='text-3xl lg:text-4xl font-semibold'>Frequently Asked Questions <span className='text-[#146DE1]'>(FAQs)</span></h2>
      </div>

      <div className='mt-8 border-t border-gray-200'>
        {faqs.map((item, index) => {
          const isOpen = openIndex === index

          return (
            <button
              key={item.question}
              type='button'
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className='w-full text-left border-b border-gray-200 py-5 flex items-center justify-between gap-4'
            >
              <div>
                <p className='text-base lg:text-lg text-gray-800 py-5 lg:py-10'>{item.question}</p>
                {isOpen ? <p className='mt-3 text-sm lg:text-base text-gray-600'>{item.answer}</p> : null}
              </div>
              <Icon
                icon='mdi:chevron-down'
                className={`text-2xl text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
          )
        })}
      </div>
    </section>
  )
}

export default FAQsection