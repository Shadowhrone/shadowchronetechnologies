import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {Socials} from "../../../data/Socials"

const footer = () => {
   
  return (
   
     <div className='   py-15 grid xl:grid-cols-4 md:grid-cols-2 bg-[#021142] text-white justify-center items-start gap-[70px] w-full md:px-20  px-5  '>
       <div className='flex flex-col w-75 h-42  gap-4'>
 <Image src="/logo.svg" alt="logo" width={250} height={76} className='w-[174px] h-[74px] lg:w-[250px] lg:h-[76px]'/>
       <p>Connect with us on our various social media platforms.</p>
       <div className='flex '>
         {
            Socials.map((link, index)=>(
                <div key={index} className='inline-block mr-4  hover:opacity-70 cursor-pointer '>
                    <Link href={link.href}  target="_blank" rel="noopener noreferrer"><Image src={link.icon || null} alt={link.alt} width={20} height={21}/></Link>
                    </div>
            ))}  
            </div>   
        </div>
        <div className='flex flex-col  gap-4'>
            <h2 className='font-medium text-[20px]'>Company</h2>
            <Link  className='text-white/80' href='/product'>Products</Link>
            <Link  className='text-white/80' href='/service'>Services</Link>
            <Link  className='text-white/80' href='/blog'>Blog</Link>
        </div>
        <div className='flex flex-col gap-4'>
              <h2 className='font-medium text-[20px]'>Resources</h2>
            <Link className='text-white/80' href='/product'>Template</Link>
            <Link className='text-white/80' href='/service'>Invoices</Link>
            <Link className='text-white/80' href='/blog'>Policies</Link>
        </div>
        <div className='flex flex-col  gap-4'>
              <h2 className='font-medium text-[20px]'>Email</h2>
            <Link href='mailto:shadowchronetechnologies@gmail.com'  target="_blank" rel="noopener noreferrer" className='  py-3.5 pl-2.5 pr-5 bg-white/30 text-white '>shadowchronetechnologies@gmail.com</Link>
            <p className='text-white/80'>Feel free to reach us through our email provided above, as we’ll alway respond in due time.</p>
           
        </div>
     </div>
   
  )
}

export default footer