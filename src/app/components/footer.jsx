import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const footer = () => {
    const socialLinks = [
        {img:'/twitter.svg', text:'products', href: 'https://facebook.com'},
        {img:'/linkedin.svg', text:'services', href: 'https://twitter.com'},
        {img:'/facebook.svg', text:'Blog', href: 'https://linkedin.com'},
       
    ]
  return (
    <div className='w-full  h-auto bg-[#021142] text-white  mx-auto flex justify-center items-center ' >
     <div className='   py-15 grid grid-cols-[repeat(auto-fit,minmax(110px,auto))] justify-center items-start gap-[70px] w-[90%]    '>
       <div className='flex flex-col w-75 h-42  gap-4'>
<Image src="/logo.svg" alt="logo" width={290} height={65} className=' '/>
       <p>Connect with us on our various social media platforms.</p>
       <div className='flex '>
         {
            socialLinks.map((link, index)=>(
                <div key={index} className='inline-block mr-4  hover:opacity-70 cursor-pointer '>
                    <Link href={link.href}><Image src={link.img} alt={link.text} width={20} height={21}/></Link>
                    </div>
            ))}  
            </div>   
        </div>
        <div className='flex flex-col w-[110px]  h-42 gap-4'>
            <h2 className='font-medium text-[20px]'>Company</h2>
            <Link  className='text-white/80' href='/product'>Products</Link>
            <Link  className='text-white/80' href='/service'>Services</Link>
            <Link  className='text-white/80' href='/blog'>Blog</Link>
        </div>
        <div className='flex flex-col w-[150px]  h-42 gap-4'>
              <h2 className='font-medium text-[20px]'>Resources</h2>
            <Link className='text-white/80' href='/product'>Template</Link>
            <Link className='text-white/80' href='/service'>Invoices</Link>
            <Link className='text-white/80' href='/blog'>Policies</Link>
        </div>
        <div className='flex flex-col w-[350px]  h-42 gap-4'>
              <h2 className='font-medium text-[20px]'>Email</h2>
            <Link href='mailto:abimbola23@gmail.com' className='  py-3.5 pl-2.5 pr-5 bg-white/30 text-white '>abimbola23@gmail.com</Link>
            <p className='text-white/80'>Feel free to reach us through our email provided above, as we’ll alway respond in due time.</p>
           
        </div>
     </div>
    </div>
  )
}

export default footer