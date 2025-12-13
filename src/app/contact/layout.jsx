import React from 'react'
import Navbar from '../components/navbar';
import Footer from '../components/footer';
export const metadata = {
  title: " contact | Shadowchrone tech",
  description: "shadowchrone technologies ltd product page",
};

const layout = ({children}) => {
  return (
    <div className='font-inter mx-auto max-w-[1580px]'>
     <Navbar />
     {children}
     <Footer/>
    </div>
  )
}

export default layout