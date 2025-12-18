'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Products } from '../../../data/products'

const Page = () => {
  const [category, setCategory] = useState('All')

  // Store selected image per product index
  const [selectedImages, setSelectedImages] = useState({})

  // Unique categories
  const categories = ['All', ...new Set(Products.map(p => p.category))]

  const filteredProducts =
    category === 'All'
      ? Products
      : Products.filter(prod => prod.category === category)

      //to reset selected images when category changes
      useEffect(() => {
  setSelectedImages({})
}, [category])


  return (
    <>
      {/* HERO */}
      <div className="w-full bg-[#F7F5F5] h-[350px] text-black pt-40 pb-2.5 px-20">
        <div className="text-[20px] flex font-medium">
          <Link href="/">
            <h2 className="text-black/20">Home |</h2>
          </Link>
          <Link href="/product">
            <h2 className="text-[#1225F5]">Shop</h2>
          </Link>
        </div>
        <h1 className="md:text-[40px] md:leading-14 font-medium pt-6 text-left text-2xl md:max-w-[75%] lg:max-w-[45%]">
          Explore Products <br /> Categories
        </h1>
      </div>

      {/* CATEGORY FILTER */}
      <div className="flex justify-between items-center gap-10 overflow-x-scroll max-w-[70%] mx-auto no-scrollbar text-nowrap">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setCategory(cat)}
            className={`py-2 text-xs lg:text-sm font-medium transition
              ${
                category === cat
                  ? 'border-b-2 border-[#0F4082] text-[#0F4082]'
                  : 'text-[#4B5564] hover:text-[#0F4082]'
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PRODUCTS */}
      {filteredProducts.length === 0 ? (
        <p className="text-center my-16">No products available.</p>
      ) : (
        filteredProducts.map((product, index) => (
          <div
            key={index}
            className="w-full xl:px-40 px-10 py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 text-black"
          >
            {/* IMAGE SECTION */}
            <div className="min-w-[50%] flex flex-col items-center ">
              <Image
                src={selectedImages[index] || product.image[0]}
                width={744}
                height={400}
                alt={product.name}
                className="rounded-[8px] lg:w-full md:w-[80%]  h-[450px]  lg:object-fill"
              />

              {/* THUMBNAILS */}
              <div className="flex mt-4  overflow-x-scroll max-w-[100%] h-auto justify-between items-center no-scrollbar">
                {product.image.map((img, idx) => (
                  <Image
                    key={idx}
                    src={img}
                    width={80}
                    height={80}
                    alt={product.name}
                    onClick={() =>
                      setSelectedImages(prev => ({
                        ...prev,
                        [index]: img,
                      }))
                    }
                    className={` cursor-pointer mt-4 mr-2 max-w-20 max-h-20 rounded-[10px] transition
                      ${
                        selectedImages[index] === img
                          ? 'ring-2 ring-[#0F4082]'
                          : 'opacity-90 hover:opacity-100'
                      }
                    `}
                  />
                ))}
              </div>
            </div>

            {/* TEXT SECTION */}
            <div className="lg:min-w-[50%] md:w-[80%]  mx-auto">
              <h2 className="text-black/60 font-semibold">
                {product.category}
              </h2>
              <h1 className="text-[32px] font-semibold">{product.name}</h1>
              <h2 className="text-[40px] font-bold pt-4">
                ₦ {product.price}
              </h2>

              <p className="text-[20px] pt-4 text-black/70">
                {product.description}
              </p>

              <div className="flex items-center flex-wrap mt-5 gap-4">
                <p className="font-semibold text-black/60">Tags:</p>
                {product.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-[#E5E5E5] rounded-full text-sm text-black/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button className="bg-[#030D3C] text-white py-3 px-6 mt-10 rounded hover:bg-blue-900">
                Buy Now
              </button>
            </div>
          </div>
        ))
      )}
    </>
  )
}

export default Page
