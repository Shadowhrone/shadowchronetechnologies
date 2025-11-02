'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {Products} from '../../../data/products'

const Page = () => {
  
  return (
    <>
      <div className='w-full bg-[#F7F5F5] h-[350px] text-black pt-40 pb-2.5 px-20'>
        <div className='text-[20px] flex font-medium '>
          <Link href='/'><h2 className='text-black/20 '>Home |</h2></Link>
          <Link href='/product'><h2 className='text-[#1225F5]'>Shop</h2></Link>
        </div>
        <h1 className='text-[40px] leading-14 font-medium pt-6 '>Explore Products <br />Categories</h1>
      </div>

      {Products.map((product, index) => {
        // each product has its own image state
        const [image, setImage] = useState(product.image[2]);
       
        
        return (
          <div key={index} className='w-full h-auto px-20  py-16 flex justify-center items-center gap-8 text-black '>
            <div className='w-auto h-auto flex flex-col'>
              <Image
                src={image}
                width={744}
                height={400}
                alt={product.name}
                className='rounded-[8px] w-[744px] h-[400px] object-contain'
              />
              <div>
                {product.image.map((img, idx) => (
                  <Image
                    key={idx}
                    src={img}
                    width={120}
                    height={120}
                    alt={product.name}
                    onClick={() => setImage(img)}
                    className='cursor-pointer mt-4 mr-2  rounded-[10px] inline-block'
                  />
                ))}
              </div>
            </div>

            <div className='w-[544px] h-auto '>
              <h2 className='font-medium text-[20px] text-black/60'>{product.title}</h2>
              <h1 className='text-[40px] leading-12 font-semibold'>{product.name}</h1>
              <div className='flex justify-start items-center gap-2.5 mt-4'>
              <h2 className="text-[24px] font-semibold">{`₦ ${product.price}`}</h2>
              <h2 className='line-through text-[24px] font-semibold text-black/50'>{` ₦ ${product.oldprice}`}</h2>
              </div>
              <p className='text-[22px] leading-8 pt-4 font-medium text-black/70'>{product.description}</p>
              <div className='flex justify-start items-center mt-[20px] gap-4'>
                <p className='text-black/60 font-semibold text-[20px]'>Tags :</p>
                {product.tags.map((tag, idx) => (
                  <button
                    key={idx}
                    className='px-4 py-2 bg-[#E5E5E5] rounded-full text-black/50 text-[14px] font-medium mr-2'
                  >
                    {tag}
                  </button>
                ))}
              </div>
              <button className='bg-[#030D3C] text-white py-2 px-3 mt-10 rounded-[4px] text-[20px] cursor-pointer hover:bg-blue-900'>
                Buy Now
              </button>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Page
