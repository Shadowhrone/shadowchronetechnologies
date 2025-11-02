'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import  {Services} from "../../../data/services"

const Page = () => {
  

  return (
    <>
      <div className='w-full bg-[#F7F5F5] h-[350px] text-black pt-40 pb-2.5 px-20'>
        <div className='text-[20px] flex font-medium '>
          <Link href='/'><h2 className='text-black/20 '>Home |</h2></Link>
          <Link href='/service'><h2 className='text-[#1225F5]'>Services</h2></Link>
        </div>
        <h1 className='text-[40px] leading-14 font-medium pt-6 '>We Offer Broad-range <br />of Services</h1>
      </div>
      <div className="text-black grid xl:grid-cols-3 md:grid-cols-2 gap-[15px] w-[80%] mx-auto">
        {Services.length === 0 ? (
          <p className='text-center bg-red-300 font-medium mt-[200px] py-4 rounded-2xl mb-[150px]  text-red-400'>No Service Available</p>
        ) : (
          Services.map((service, index) => (
            <div key={index} className=" py-10 px-5 flex shadow-xl mt-[64px] flex-col max-w-[390px] items-center justify-between  bg-white rounded-[25px] ">
             <Image src='gserv.svg' width={130} height={90} alt='svg' className='-mt-16' />
              <h1 className='text-[30px] pt-[25px] font-semibold text-[#48454B] leading-10 text-center'>{service.title}</h1>
             
              <p className='text-[14px] pt-[6px] font-medium text-black/50 text-center'>{service.description}</p>
              <button className='text-white text-medium bg-[#1A78D6] text-center rounded-bl-[8px] cursor-pointer rounded-tr-[8px] w-[176px] py-[18px] mt-[50px]'>Get a quote</button>
            </div>
          ))
        )}
      </div>
    </>
  )
}

export default Page
