import { Icon } from '@iconify/react'
import React from 'react'

const QuotationButton = () => {
  return (
    
    <button className='bg-[#FFFFFF] rounded-full px-5 py-3 text-sm text-black border border-black font-light lg:w-auto items-center justify-center flex gap-2 hover:text-white cursor-pointer hover:bg-black w-full '>Get a quotation
            <Icon icon="uit:arrow-up-right" height={16} width={16}></Icon>
          </button>
  )
}

export default QuotationButton