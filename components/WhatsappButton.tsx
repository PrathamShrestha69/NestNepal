"use client"
import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

const WhatsappButton = ({text}) => {
  return (
    <div><Link target='_blank' href={'https://wa.me/+9779864333517'}><button className='flex flex-row bg-[#E2F6E5] border border-[#11A925] text-[#11A925] py-2 px-3 rounded-xl gap-2 cursor-pointer items-center hover:bg-[#11A925] hover:text-white'>
            <Icon icon="logos:whatsapp-icon" height={24} width={24} />
            <p className=' mr-2 text-center'>{text}</p>
          </button>
          </Link></div>
  )
}

export default WhatsappButton