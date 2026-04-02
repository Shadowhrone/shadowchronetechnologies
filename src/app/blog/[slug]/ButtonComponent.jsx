'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

const ButtonComponent = () => {
  const router = useRouter();


  return (
    <>
     {/* Buttons */}
          <div className="flex gap-4 mt-10">
            <button className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition">
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