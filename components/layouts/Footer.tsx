import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='relative overflow-hidden lg:p-3'>
      <div
        className='hidden lg:flex rounded-t-2xl lg:rounded-2xl relative overflow-hidden min-h-[450px]'
        style={{ background: 'radial-gradient(90.1% 111.19% at 50% 50%, #0234F8 0%, #011F92 100%)' }}
      >
        {/* Gradient PNG Background */}
        <div className='absolute inset-0 z-0 px-5'>
          <Image
            src='/Footers/gradient.png'
            alt=''
            fill
            className='object-contain mt-25 rounded-2xl px-5'
            aria-hidden='true'
          />
        </div>

        {/* White Gradient Overlay */}
        <div className='absolute inset-0 z-[1] bg-gradient-to-br from-white/60 via-white/10 to-transparent rounded-2xl' />

        {/* Content */}
        <div className='relative z-10 px-4 md:px-8 lg:px-16 py-8 lg:py-12'>

          {/* Top Section */}
          <div className='flex flex-col lg:flex-row justify-between items-start gap-8 mb-16 lg:mb-54'>
            {/* Logo */}
            <div>
              <Image
                src='/Footers/Logo.png'
                alt='Nest Nepal'
                width={200}
                height={40}
              />
            </div>

            {/* Contact Info */}
            <div className='text-white space-y-2 text-sm lg:text-base'>
              <p className='font-medium'>Nepal</p>
              <p>Call us : +977 986-160-1174</p>
              <p>Kupondole, Lalitpur, Nepal</p>
              <p>support@nestems.com</p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4'>
            {/* Left Text */}
            <p className='text-white text-sm lg:text-base'>Google Workspace</p>
            {/* Right Links */}
            <div className='flex flex-wrap items-center gap-4 lg:gap-6 text-white text-sm lg:text-base'>
              <Link href='#' className='hover:underline'>Why google workspace?</Link>
              <Link href='#' className='hover:underline'>Pricing</Link>
              <Link href='#' className='hover:underline flex items-center gap-1'>
                Get A Quotation <Icon icon='mdi:arrow-right' className='text-xl -rotate-45' />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* mobile view */}
      <div
        className='lg:hidden flex flex-col rounded-t-2xl relative overflow-hidden min-h-[450px] px-6 py-8'
        style={{ background: 'radial-gradient(90.1% 111.19% at 50% 50%, #0234F8 0%, #011F92 100%)' }}
      >
        {/* White Gradient Overlay */}
        <div className='absolute inset-0 z-[1] bg-gradient-to-br from-white/20 via-white/5 to-transparent rounded-2xl' />

        {/* Content */}
        <div className='relative z-10'>
          {/* Logo */}
          <div className='mb-8'>
            <Image
              src='/Footers/Logo.png'
              alt='Nest Nepal'
              width={140}
              height={35}
            />
          </div>

          {/* Navigation Links */}
          <div className='flex flex-col gap-3.5 text-white mb-8'>
            <Link href='#' className='text-base hover:underline'>Google Workspace</Link>
            <Link href='#' className='text-base hover:underline'>Why google workspace?</Link>
            <Link href='#' className='text-base hover:underline'>Pricing</Link>
            <Link href='#' className='text-base hover:underline'>Testimonials</Link>
            <Link href='#' className='hover:underline flex items-center gap-1 text-base'>
              Get A Quotation <Icon icon='mdi:arrow-right' className='text-xl -rotate-45' />
            </Link>
          </div>

          {/* Support Section */}
          <div className='text-white space-y-3 mt-8'>
            <p className='font-semibold text-base'>Support</p>
            <div className='space-y-1.5 text-sm'>
              <p>Call us : +977 986-160-1174</p>
              <p>Kupondole, Lalitpur, Nepal</p>
              <p>support@nestems.com</p>
            </div>
          </div>
        </div>

        {/* Gradient Text Background */}
        <div className='absolute inset-0 right-0 flex items-center justify-center overflow-hidden pointer-events-none'>
          <Image
            src='/Footers/logo2.png'
            alt=''
            width={70}
            height={70}
            className='object-contain ml-56'
            aria-hidden='true'
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer