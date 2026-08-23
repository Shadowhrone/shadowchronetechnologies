'use client'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { number } from "../../../../data/number";

const Button = ({services}) => {
    const [modal, setModal] = useState(false);

  return (
    <div>
      <button className='text-white text-medium bg-[#030D3C] text-center rounded-bl-[8px] cursor-pointer rounded-tr-[8px] w-[176px] py-[18px] mt-[50px]' onClick={()=>setModal(services)}>Get a Quote</button>
      {modal && (
           <div
      className="fixed  inset-0 w-full h-full bg-black/70 flex justify-center items-center z-[1000] px-6"
      onClick={() => setModal(false)} // click background to close
    >
      {/* Modal content */}
      <div
        className="text-[#4B5564] rounded-[12px] bg-white py-6 px-4 sm:py-8 sm:px-6 
                   w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl 
                   max-h-[80vh] md:max-h-[85vh] overflow-y-auto scrollbar-hide 
                   "
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <img src={services.image} alt={services.title} className="mx-auto mb-4 w-full md:h-[300px] object-cover"/>
        <h1 className="text-[#48454B] text-center font-bold text-[24px] sm:text-[28px] md:text-[32px]">
          {services.title}
        </h1>
      <p className="text-center">{services.description}</p>
            <button className='text-white text-medium bg-[#030D3C] w-full text-center rounded-bl-[8px] cursor-pointer rounded-tr-[8px]  py-[18px] mt-[50px]'  onClick={() => {
    const message = `Hi, I want to make an inquiry about the ${services.title}`;
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }}>Get a Quote</button>
      </div>
    </div>
  )}
    </div>
    )
}

export default Button