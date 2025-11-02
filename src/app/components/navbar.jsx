'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


 const navItems = [
{ 'text': 'Home', 'href': '/' },
{ 'text': 'Products', 'href': '/product' },
{ 'text': 'Services', 'href': '/service' },
{ 'text': 'Blog', 'href': '/blog' },
{ 'text': 'Contact', 'href': '/contact' },

 ]

const navbar = () => {

    const pathname = usePathname();
    const navStyle = "font-bold ";

  return (
    <>
    <div className='w-full mx-auto max-w-[1580px] h-20 bg-gradient-to-b px-0 from-[#005CC3] to-[#020025] fixed text-white z-999'>
    <header className='w-[95%] py-3 bg-gradient-to-b  from-[#011850] to-[#0060C6] max-w-[1580px] fixed z-1000 mt-6 rounded-[30px] flex justify-between items-center px-3.5 left-0 right-0 mx-auto '>
       <Image src="/logo.svg" alt="logo" width={250} height={76} className=''/>
       <nav>
        <ul className='flex gap-10 text-lg font-medium'>
           {navItems.map((item, index)=>(
              <Link href={item.href} className={`hover:text-amber-200 ${pathname ===item.href ? navStyle : item.href==='white'}`}  key={index}><li key={index}>{item.text}</li></Link>
           ))}
        </ul>
       </nav>
        <button className='px-8 py-4 bg-white hover:bg-amber-100 cursor-pointer text-black rounded-2xl font-medium'>Get a Quote</button>
    </header>
    </div>
    </>
  )
}

export default navbar