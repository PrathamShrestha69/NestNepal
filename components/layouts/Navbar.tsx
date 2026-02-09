"use client"
import Image from 'next/image'
import { Icon } from "@iconify/react";
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import WhatsappButton from '../WhatsappButton';

const Navbar = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2026-02-14T23:59:59').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <nav className='mt-3 lg:mt-0'>
        <div className='flex justify-between items-center'>
          <div >
            <Image src="/layouts/logo.png" alt="logo" height={150} width={240} className='lg:flex hidden' />
            <Image src="/layouts/logo.png" alt="logo" height={100} width={150} className='lg:hidden flex' />
          </div>
          <div className='relative lg:flex flex-col items-center hidden mr-17'>
            <p className='text-[#F47191] text-3xl font-cursive font-extrabold bottom-0 translate-y-3'>Valentine Offer</p>
            <div className='flex flex-col items-center'>
              <p className='text-4xl font-bold text-[#146DE1]'>
                {String(timeLeft.days).padStart(2, '0')} : {String(timeLeft.hours).padStart(2, '0')}
                : {String(timeLeft.minutes).padStart(2, '0')}: {String(timeLeft.seconds).padStart(2, '0')}
              </p>
              <p className=' flex gap-8 text-md font-semibold text-[#000000]'>
                <span>Days</span>
                <span>Hrs</span>
                <span>Mins</span>
                <span>Secs</span>
              </p>
            </div>
          </div>
          <WhatsappButton text="Contact Sales"/>
        </div>
        <div className='relative flex flex-col items-center lg:hidden mt-13'>
          <p className='text-[#F47191] text-2xl lg:text-3xl font-cursive font-extrabold bottom-0 translate-y-3'>Valentine Offer</p>
          <div className='flex flex-col items-center'>
            <p className='text-3xl lg:text-4xl font-bold text-[#146DE1]'>
              {String(timeLeft.days).padStart(2, '0')} : {String(timeLeft.hours).padStart(2, '0')}
              : {String(timeLeft.minutes).padStart(2, '0')}: {String(timeLeft.seconds).padStart(2, '0')}
            </p>
            <p className='flex gap-6 text-sm lg:text-md font-semibold text-[#000000] items-center justify-between'>
              <span>Days</span>
              <span>Hrs</span>
              <span>Mins</span>
              <span>Secs</span>
            </p>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar