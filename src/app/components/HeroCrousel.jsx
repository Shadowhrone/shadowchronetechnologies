"use client";

import Image from "next/image";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { number } from "../../../data/number";
 
import React from 'react'

const HeroCrousel = () => {
    const items = [
           <div className="relative w-full h-auto" key="1">
    <Image src="/bgone.svg" width={1440} height={300} alt="Slide 2" className="w-full h-181.25 object-cover"  key="2" />
    <div className='top-90 lg:left-40 left-10 absolute z-1'>
     <div className="backdrop-blur-xl bg-white/20 p-8 rounded-2xl shadow-lg lg:w-130 w-[70%] text-left px-4 border   border-white/20">
        <h1 className="md:text-5xl text-xl font-bold text-white">Automations for Smart Living</h1>
        <p className="mt-2 text-white/70">
         We blend smart automation with elegant design to craft intuitive, inspiring spaces.
        </p>
      </div>
      <button className="text-white px-7.5 py-3.75 mt-3.75 rounded-lg text-[18px] cursor-pointer hover:bg-blend-difference font-semibold bg-[#1B7DDE]" onClick={() => {
          const message = `Hi, I want to make an inquiry about our services/products.`;
          const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
          window.open(url, "_blank");
        }}>Get Quote</button>
      </div>
    </div>,
         <div className="relative w-full h-auto" key="2">
    <Image src="/bgtwo.svg" width={1440} height={300} alt="Slide 2" className="w-full h-181.25  object-cover"  key="2" />
    <div className='top-90 lg:left-40 left-10 absolute z-1'>
     <div className="backdrop-blur-xl bg-white/20 p-8 rounded-2xl shadow-lg lg:w-130 w-[70%] text-left px-4 border   border-white/20">
        <h1 className="md:text-5xl text-xl font-bold text-white">Seamless Access and Control</h1>
        <p className="mt-2 text-white/70">
         We design our systems to deliver friction-less access across platforms, devices, and geographies.
        </p>
      </div>
      <button className="text-white px-7.5 py-3.75 mt-3.75 rounded-lg text-[18px] cursor-pointer hover:bg-blend-difference font-semibold bg-[#1B7DDE]" onClick={() => {
          const message = `Hi, I want to make an inquiry about our services/products.`;
          const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
          window.open(url, "_blank");
        }}>Get Quote</button>
      </div>
    </div>,
          <div className="relative w-full h-auto" key="3">
    <Image src="/bgthree.svg" width={1440} height={300} alt="Slide 2" className="w-full h-181.25 object-cover"  key="2" />
    <div className='top-90 lg:left-40 left-10  absolute z-1'>
     <div className="backdrop-blur-xl bg-white/20 p-8 rounded-2xl shadow-lg lg:w-130 w-[70%] text-left px-4 border border-white/20">
        <h1 className="md:text-5xl text-xl font-bold text-white">Tamper-Resistant Locking Systems</h1>
        <p className="mt-2 text-white/70">
         We provide advanced security features that prevent intruders, and ensures uncompromising safety.
        </p>
      </div>
      <button className="text-white px-7.5 py-3.75 mt-3.75 rounded-lg text-[18px] cursor-pointer hover:bg-blend-difference font-semibold bg-[#1B7DDE]" onClick={() => {
          const message = `Hi, I want to make an inquiry about our services/products.`;
          const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
          window.open(url, "_blank");
        }}>Get Quote</button>
      </div>
    </div>,
  ];
  return (
    <> <AliceCarousel
          
          items={items}
          autoPlay
          infinite
          dotsControls
           disableButtonsControls
           autoPlayInterval={3000}
        /></>
  )
}

export default HeroCrousel

