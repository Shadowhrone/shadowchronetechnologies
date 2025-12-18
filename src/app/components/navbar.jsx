'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SideBar from "./sideBar";
import { useState } from 'react';
import { usePathname } from 'next/navigation'


 const navItems = [
{ 'text': 'Home', 'href': '/' },
{ 'text': 'Products', 'href': '/product' },
{ 'text': 'Services', 'href': '/service' },
{ 'text': 'Blog', 'href': '/blog' },
{ 'text': 'Contact', 'href': '/contact' },

 ]

const navbar = () => {
    const [toggle, setToggle] = useState(false);
 
    const pathname = usePathname();
    const navStyle = "font-bold ";

  return (
    <>
    <div className='w-full hidden lg:block mx-auto max-w-[1580px] h-20 bg-gradient-to-b px-0 from-[#005CC3] to-[#020025] fixed text-white z-999'>
    <header className='lg:w-[95%] w-full py-3 bg-gradient-to-b  from-[#011850] to-[#0060C6] max-w-[1580px] fixed z-1000 mt-6 lg:rounded-[30px] flex justify-between items-center px-3.5 left-0 right-0 mx-auto '>
       <Image src="/logo.svg" alt="logo" width={250} height={76} className='w-[174px] h-[74px] lg:w-[250px] lg:h-[76px]'/>
       <nav className='lg:block hidden'>
        <ul className='flex gap-10 text-lg  font-medium'>
           {navItems.map((item, index)=>(
              <Link href={item.href} className={`hover:text-amber-200 ${pathname ===item.href ? navStyle : item.href==='white'}`}  key={index}><li key={index}>{item.text}</li></Link>
           ))}
        </ul>
       </nav>
        <button className='px-8 py-4 bg-white hover:bg-amber-100 cursor-pointer text-black rounded-2xl lg:block hidden font-medium'>Get a Quote</button>
        <Image
          src="/hamburgermenu.svg"
          alt="menu"
          width={40}
          height={40}
          onClick={() => setToggle(true)}
          className="lg:hidden block cursor-pointer "
        />
         {toggle && <SideBar handleToggleOff={() => setToggle(false)} />}
     
    </header>
    </div>
  {/* MOBILE NAVBAR */}
  <div className='lg:hidden block'>
     <header className='lg:w-[95%] w-full py-3 bg-gradient-to-b  from-[#011850] to-[#0060C6] max-w-[1580px] fixed z-1000  lg:rounded-[30px] flex justify-between items-center px-3.5 left-0 right-0 mx-auto '>
       <Image src="/logo.svg" alt="logo" width={250} height={76} className='w-[174px] h-[74px] lg:w-[250px] lg:h-[76px]'/>
       <nav className='lg:block hidden'>
        <ul className='flex gap-10 text-lg  font-medium'>
           {navItems.map((item, index)=>(
              <Link href={item.href} className={`hover:text-amber-200 ${pathname ===item.href ? navStyle : item.href==='white'}`}  key={index}><li key={index}>{item.text}</li></Link>
           ))}
        </ul>
       </nav>
        <button className='px-8 py-4 bg-white hover:bg-amber-100 cursor-pointer text-black rounded-2xl lg:block hidden font-medium'>Get a Quote</button>
        <Image
          src="/hamburgermenu.svg"
          alt="menu"
          width={40}
          height={40}
          onClick={() => setToggle(true)}
          className="lg:hidden block cursor-pointer "
        />
         {toggle && <SideBar handleToggleOff={() => setToggle(false)} />}
     
    </header>
    </div>
    </>
  )
}

export default navbar




