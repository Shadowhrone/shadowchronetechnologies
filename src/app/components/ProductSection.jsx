'use client'
import Image from 'next/image'
import React from 'react'
import { number } from '../../../data/number'
const ProductSection = () => {
     const products = [
    {title:"Biometric Card Attendance",image:'/attend.png', description:'Get premium quality Biometric Card Attendance systems for accurate and reliable staff management.'},
     {title:"Hotel Card Door Lock",image:'/smartlock.png', description:'Get your Hotel Card Door Lock system for maximum security and seamless guest access.'},
      {title:"Inventory Software",image:'/inventory.png', description:'Get your Smart inventory management software that helps you track stock, manage sales, and stay organized.'}
  ]
    
  return (
    <>
      {products.map((product, index) => (
              <div key={index} className="   py-10  px-8 shadow-xl h-full  rounded-[25px]">
              <div key={index} className=" flex  flex-col justify-between h-full  items-center  ">
                 <Image src={product.image} width={320} height={286} alt='svg' className=' rounded-[18px] ' />
                 <div className="flex flex-col justify-center items-left ">
                  <h1 className='md:text-[24px] text-[20px] pt-1.25 font-semibold text-[#48454B]/80  '>{product.title}</h1>
                 
                  <p className='text-[14px] font-medium text-black/50  '>{product.description}</p>
                 
                  </div>
                   <div className="flex flex-col justify-center   w-full items-left ">
                   <button className='text-white text-medium bg-[#030D3C] text-center rounded-bl-lg cursor-pointer rounded-tr-lg w-44 py-4.5 mt-12.5'  onClick={() => {
            const message = `Hi, I want to make an inquiry about the ${product.title}`;
            const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
            window.open(url, "_blank");
          }}>Buy Now</button>
                    </div>
                </div>
                </div>
            ))}
      
    </>
  )
}

export default ProductSection