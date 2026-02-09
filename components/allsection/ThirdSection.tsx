import Image from 'next/image'
import React from 'react'

interface textType {
  key: number,
  heading: String,
  para: String,
  img: String
}

const text = [
  {
    key: 1,
    heading: "For enterprise",
    para: "Secure collaboration <span style='color: #146DE1;'>tools for enterprise</span> with premium AI and enterprise-grade security built in for all the ways work is changing",
    img: '/others/1.png'
  },
  {
    key: 2,
    heading: "For small business",
    para: "Tools for <span style='color: #146DE1;'>small businesses</span> that help teams and <span style='color: #146DE1;'>individuals</span> with everyday tasks like scheduling appointments and email marketing.",
    img: '/others/2.png'
  },
  {
    key: 3,
    heading: "For new business",
    para: "Essentials tools for <span style='color: #146DE1;'>new businesses</span> and <span style='color: #146DE1;'>startups</span>, including business email domains,online file sharing and storage, and more.",
    img: '/others/3.png'
  },
]

const ThirdSection = () => {
  return (
    <section className='mt-15 font-[Helvetica]'>
      <div>
        <h1 className='text-3xl lg:text-5xl justify-center text-center mt-5 lg:mt-10 font-semibold'>Solutions for businesses,
        </h1>
        <h1 className='text-3xl lg:text-5xl justify-center text-center mt-5  font-semibold text-[#146DE1]'>साना देखि ठूला सबैका लागि</h1>
        <p className='text-lg text-black text-center mt-5 line-clamp-2 '>No matter the size, Google Workspace ले तपाईंको business को </p>
        <p className='text-lg text-black text-center line-clamp-2 '> सबै needs पूरा गर्छ</p>
      </div>
      <div className='flex lg:flex-row flex-col mt-15 '>
        {
          text.map((text) => {
            return (
              <div key={text.key} className='flex flex-col gap-3 text-center items-center'>
                <Image alt={text.heading} src={text.img} height={100} width={400} />
                <h1 className='text-3xl mt-2'>{text.heading}</h1>
                <p className=' text-md lg:text-xl line-clamp-3 mb-10' dangerouslySetInnerHTML={{ __html: text.para }}></p>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default ThirdSection