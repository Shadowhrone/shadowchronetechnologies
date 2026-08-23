'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { number } from "../../../data/number";

export default function ProductsClient({ products }) {
  const [category, setCategory] = useState('All')
  const [selectedImages, setSelectedImages] = useState({})

  const hasProducts = products && products.length > 0

  const categories = hasProducts
    ? ['All', ...new Set(products.map(p => p.category))]
    : []

  const filteredProducts =
    category === 'All'
      ? products
      : products.filter(prod => prod.category === category)

  useEffect(() => {
    setSelectedImages({})
  }, [category])

  return (
    <>
      {/* HERO */}
      <div className="w-full bg-[#F7F5F5] text-black lg:h-87.5 pt-40 pb-2.5 md:px-20 px-5">
        <div className="text-[20px] flex font-medium">
          <Link href="/">
            <h2 className="text-black/20">Home |</h2>
          </Link>
          <Link href="/product">
            <h2 className="text-[#1225F5]">Shop</h2>
          </Link>
        </div>
        <h1 className="md:text-[40px] md:leading-14 font-medium py-6 text-left text-2xl md:max-w-[75%] lg:max-w-[45%]">
          Explore Products <br /> Categories
        </h1>
      </div>

      {/* CATEGORY FILTER */}
      {categories.length > 0 && (
        <div className="flex justify-between items-center gap-10 overflow-x-scroll md:max-w-[70%] max-w-[85%] mx-auto no-scrollbar text-nowrap">
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
      )}

      {/* PRODUCTS / EMPTY STATE */}
      {!hasProducts ? (
        <p className="text-center my-16 max-w-[60%] mx-auto bg-red-300 text-black">No products available.</p>
      ) : filteredProducts.length === 0 ? (
        <p className="text-center my-16 max-w-[60%] mx-auto bg-red-300 text-black">No products available.</p>
      ) : (
        filteredProducts.map((product, index) => (
          <div
            key={product.id}
            className="w-full xl:px-40 px-10 py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 text-black"
          >
            {/* IMAGE SECTION */}
            <div className="min-w-[50%] flex flex-col items-center">
              <Image
                src={
                  selectedImages[index] ||
                  product.images?.[0] ||
                  "/electricfence.webp"
                }
                width={744}
                height={400}
                alt={product.name}
                className="rounded-lg lg:w-full md:w-[80%] lg:h-112.5 lg:object-fill"
              />

              {/* THUMBNAILS */}
            <div className="flex gap-2 px-3 py-4 overflow-x-scroll no-scrollbar">
                {product.images.map((img, idx) => (
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
                    className={` w-12.5 h-12.5  md:w-20 md:h-20 cursor-pointer rounded-lg ${
                      selectedImages[index] === img && "ring-2 ring-[#0F4082]"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* TEXT SECTION */}
            <div className="lg:min-w-[50%] md:w-[80%] mx-auto">
              <h2 className="text-black/60 font-semibold">{product.category}</h2>
              <h1 className="md:text-[32px] text-2xl font-semibold">{product.name}</h1>
              <h2 className="md:text-[40px] text-3xl font-bold pt-4">₦ {product.price}</h2>

              <p className="text-[20px] pt-4 text-black/70">{product.description}</p>

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

              <button className="bg-[#030D3C] text-white py-3 px-6 mt-10 rounded hover:bg-blue-900" onClick={() => {
    const message = `Hi, I want to purchase ${product.name}`;
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }}>
                Buy Now
              </button>
            </div>
          </div>
        ))
      )}
    </>
  )
}
