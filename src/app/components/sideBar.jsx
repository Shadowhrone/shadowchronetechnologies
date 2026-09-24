'use client'
import React from 'react'
import Link from 'next/link'
import { FaTimes } from "react-icons/fa";
import Image from 'next/image'
import { Socials } from '../../../data/Socials'
import { number } from '../../../data/number';

const sideBar = ({ handleToggleOff }) => {
  return (
    <div className="fixed inset-0 z-[1000] h-full flex">

      {/* Sidebar */}
      <div className="w-[70%] bg-[#021142]  flex flex-col justify-between">

        {/* Top Section */}
        <div className="flex items-center justify-between py-5 px-[30px]">
          <Link href="/" onClick={handleToggleOff}>
            <Image src='/Logo.svg' alt='logo'
              width={174} height={74}
              className='w-[124px] h-[64px]'
            />
          </Link>

          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 cursor-pointer">
            <FaTimes className="text-white" size={20} onClick={handleToggleOff} />
          </div>
        </div>

        {/* Main Links */}
          <div className="flex flex-col gap-[30px]  px-10">
          <Link href="/" onClick={handleToggleOff} className="text-white text-[14px] font-semibold">Home</Link>
          <Link href="/product" onClick={handleToggleOff} className="text-white text-[14px] font-semibold">Products</Link>
          <Link href="/service" onClick={handleToggleOff} className="text-white text-[14px] font-semibold">Services</Link>
          <Link href="/blog" onClick={handleToggleOff} className="text-white text-[14px] font-semibold">Blog</Link>
           <Link href="/contact" onClick={handleToggleOff} className="text-white text-[14px] font-semibold">Contact</Link>
            <Link href="/"  className="text-white text-[14px] font-semibold"  onClick={() => {
    const message = `Hi, I want to make an inquiry about your services/products.`;
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }}>Get a Quote</Link>
        </div>

        {/* Footer */}
        <div className="flex flex-col items-center gap-2 py-6">
                    <Link href='mailto:shadowchronetechnologies@gmail.com' className='text-white text-[16px] font-semibold break-all text-center px-6' >shadowchronetechnologies@gmail.com </Link>
          <div className="flex gap-3 mt-2">
            {Socials.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Image src={link.icon} width={24} height={24} alt={link.alt} />
              </Link>
            ))}
          </div>
        </div>

      </div>

      {/* Overlay */}
      <div onClick={handleToggleOff} className="flex-1 bg-black/50" />
    </div>
  )
}

export default sideBar
