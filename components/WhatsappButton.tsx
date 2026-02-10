"use client"
import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

type WhatsappButtonProps = { text: String, className: string }

const WhatsappButton = ({ text, className }: WhatsappButtonProps) => {
  return (
<Link target='_blank' href={'https://wa.me/+9779864333517'}><button className={`flex flex-row ${className}  border  py-2 px-3 rounded-xl gap-2 cursor-pointer items-center transition-all duration-300 ease-in-out   `}>
      <Icon icon="logos:whatsapp-icon" height={24} width={24} />
      <p className=' mr-2 text-center'>{text}</p>
    </button>
    </Link>
  )
}

export default WhatsappButton