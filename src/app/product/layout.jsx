import React from 'react'
import Navbar from '../components/navbar';
import Footer from '../components/footer';
export const metadata = {
  title: "products | Shadowchrone tech",
  description: "shadowchrone technologies ltd product page",
};

const layout = ({children}) => {
  return (
    <div className='font-inter mx-auto max-w-395'>
     <Navbar />
     {children}
     <Footer/>
    </div>
  )
}

export default layout