'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Products } from '../../../data/products'

const Page = () => {
  const [category, setCategory] = useState('All')

  // each product has its own image state using array index
  const [selectedImages, setSelectedImages] = useState(
    Products.map(prod => prod.image[0])
  )

  const Lists = [
    "All", 
    "Automatic Gate",
    " Smart Door Locks",
    "GPS Tracker",
    "Solar Systems",
    "CCTV Cameras",
    "Electric Fence Wires",
    
  ]

  //to get unique categories that is without duplicates thats when we use Set
  const categories = ['All', ...new Set(Products.map(p => p.category))]

  const filteredProducts = category === 'All' 
    ? Products 
    : Products.filter(prod => prod.category === category)

  return (
    <>
      <div className='w-full bg-[#F7F5F5] h-[350px] text-black pt-40 pb-2.5 px-20'>
        <div className='text-[20px] flex font-medium '>
          <Link href='/'><h2 className='text-black/20 '>Home |</h2></Link>
          <Link href='/product'><h2 className='text-[#1225F5]'>Shop</h2></Link>
        </div>
        <h1 className='text-[40px] leading-14 font-medium pt-6 '>Explore Products <br />Categories</h1>
      </div>

      <div className="flex justify-between items-center gap-10 overflow-x-scroll max-w-[70%] mx-auto no-scrollbar text-center text-nowrap">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setCategory(cat)}
            className={` py-2  text-xs sm:text-[10px]  lg:text-sm font-medium transition  text-nowrap
              ${category === cat ? 'border-b-[#0F4082] border-b-[2px] text-[#0F4082] font-semibold' : ' hover:text-[#0F4082] font-semibold cursor-pointer  text-[#4B5564]'}
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {filteredProducts.length === 0 ? (
        <p className="text-center text-[#000000] w-[100%] bg-red-300 m-auto my-16">No products available in this category.</p>
      ) : (
        filteredProducts.map((product, index) => {
          const currentImage = selectedImages[index]

          return (
            <div key={index} className='w-full h-auto px-20 py-16 flex justify-center items-center gap-8 text-black '>
              <div className='w-auto h-auto flex flex-col'>
                <Image
                  src={currentImage || null}
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
                      onClick={() => {
                        setSelectedImages(prev => {
                          const newImages = [...prev]
                          newImages[index] = img
                          return newImages
                        })
                      }}
                      className='cursor-pointer mt-4 mr-2 rounded-[10px] inline-block'
                    />
                  ))}
                </div>
              </div>

              <div className='w-[544px] h-auto '>
                <h2 className='font-medium text-[20px] text-black/60'>{product.category}</h2>
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
        })
      )}
    </>
  )
}

export default Page
