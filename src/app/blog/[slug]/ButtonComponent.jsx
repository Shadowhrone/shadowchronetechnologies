'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { number } from "../../../../data/number";

const ButtonComponent = () => {
  const router = useRouter();


  return (
    <>
     {/* Buttons */}
          <div className="flex gap-4 mt-10">
            <button className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition" onClick={() => {
                const message = `Hi, I want to make an inquiry about the product/service.`;
                const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
                window.open(url, "_blank");
              }}>
              Contact Us
            </button>

            <button
              onClick={() => router.back()}
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Back
            </button>
          </div>
          </>  )
}

export default ButtonComponent