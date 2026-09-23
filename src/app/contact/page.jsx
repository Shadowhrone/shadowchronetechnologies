'use client'
import React from 'react'
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { Socials } from '../../../data/Socials';

const page = () => {

const [showToast, setShowToast] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      
      const formData = new FormData(e.target);
      const fullname = formData.get("fullname");
       const email = formData.get("email");
      const phone = formData.get("phone");
      const title = formData.get("subject")
      const message = formData.get("message");
     
  
      //  Encode data for mailto link
      const subject = encodeURIComponent("New Inquiry from Website");
      const body = encodeURIComponent(
        `\nFullname: ${fullname}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${title}\nMessage: ${message}\n from Shadowchrone Technologies website`
      );
  
      // mailto link (opens Gmail or default email app)
      window.location.href = `mailto:shadowchronetechnologies@gmail.com?subject=${subject}&body=${body}`;
    
  
      // Show a quick toast popup
      setShowToast(true);
      setTimeout(() => setShowToast(false), 4000);
     e.target.reset();
    };
  

  return (
    <div>
         <div className="relative xl:h-[60vh] h-[60vh] bg-[url('/contactimg.jpg')] bg-cover bg-center">
       {/* Overlay */}
       <div className="absolute inset-0 bg-[#1B4A90]/50"></div>
   
       {/* Content */}
       <div className="relative flex flex-col text-center px-5 items-center justify-center h-full">
         <h1 className="text-white lg:text-4xl text-[18px] md:text-2xl pb-4 font-semibold md:max-w-[40%] ">Get in touch with us via our various social handles.</h1>
        
       </div>
     </div>
     <div className="grid md:grid-cols-2 grid-cols-1  w-[100%] py-20 xl:px-20 px-4">
      <div className="min-w-[50%]   h-auto bg-[#0160C6] md:px-8.5 px-4 md:rounded-l-xl py-7.5  ">
        <h1 className=" font-semibold md:text-4xl text-white text-3xl ">Contact Us</h1>
        <h1 className="text-white/76 md:text-2xl text-xl xl:w-[80%] pt-2 pb-5">Get in touch with us via our various social handles.</h1>
        <div className="flex flex-col gap-7.5 pt-5">
        <div className='flex jusify-left items-center gap-5'>
            <Image src='/locationsc.svg' width={70} height={70} alt='location md:w-[70px] md:h-[70px] w-[50px] h-[50px]' />
            <div>
               <h1 className='md:text-3xl text-2xl font-semibold'>Head Office</h1>
               <p className='text-white/76 md:text-xl text-base'>Lekki Lagos, Nigeria.</p>
            </div>
        </div>
         <div className='flex jusify-left items-center gap-5'>
            <Image src='/mailsc.svg' width={70} height={70} alt='message md:w-[70px] md:h-[70px] w-[50px] h-[50px]' />
            <div >
               <h1 className='md:text-3xl text-2xl font-semibold'>Email Us</h1>
                <Link href='mailto:shadowchronetechnologies@gmail.com' className='text-white/76 md:text-xl break-all text-base ' >shadowchronetechnologies@gmail.com </Link>
            </div>
        </div>
         <div className='flex jusify-left items-center gap-5'>
            <Image src='/phonesc.svg' width={70} height={70} alt='phone md:w-[70px] md:h-[70px] w-[50px] h-[50px]' />
            <div>
               <h1 className='md:text-3xl text-2xl font-semibold'>Call Us</h1>
               <p className='text-white/76 md:text-xl text-base'>Hot Line 1: +2348077983434</p>
               
            </div>
        </div>
        
        </div>
        <hr className='bg-white/75 my-5'/>
        <h2 className='font-semibold md:text-2xl text-xl text-white'>Follow us on our Social Handles</h2>
        <div className=' flex gap-4 pt-4'>
            {
                Socials.map((social,idx)=>(
               <div key={idx}>
                <Link href={social.href}  target="_blank" rel="noopener noreferrer"><Image src={social.icon} width={50} height={50} alt={social.alt}/></Link>

               </div>     
                ))
            }
        </div>
      </div>
      <div className="min-w-[50%] h-auto bg-white shadow-lg  md:rounded-r-xl py-7.5 px-7.5">
        <h1 className='text-black font-semibold md:text-4xl w-full  text-3xl'>Send us a message</h1>
        <form onSubmit={handleSubmit} >
              <input type="text" name='fullname' required placeholder="Fullname" className= 'w-full border-2 border-black/25 outline-[#0160C6] py-4 px-4 rounded-xl mt-10 text-black/80  text-base' />
            <div className='grid md:grid-cols-2  gap-6'>
                <input type="text" name='email' required placeholder="Enter your Email" className= 'md:min-w-[50%] border-2 border-black/25 outline-[#0160C6] py-4 px-4 rounded-xl mt-10 text-black/80  text-base' />
                <input type="text" name='phone' placeholder="Enter Your Phone No" className=' md:min-w-[50%] border-2 border-black/25 outline-[#0160C6] py-4 px-4 rounded-xl mt-10 text-black/80  text-base' />
            </div>
            <input type="text" name='subject' required placeholder="Subject" className= 'w-full border-2 border-black/25 outline-[#0160C6] py-4 px-4 rounded-xl mt-10 text-black/80  text-base' />
            <textarea type="text" name='message'required placeholder="Enter Your Message" className= 'w-full border-2 border-black/25 outline-[#0160C6] py-4 px-4 rounded-xl mt-10 text-black/80  text-base'  rows='4' ></textarea>
                
               {/*  Toast notification */}
            {showToast && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-5 py-3 rounded-lg shadow-lg text-sm z-[1100]">
            Email draft opened successfully
              </div>
          )}

            <button type="submit" className='bg-[#0160C6] text-white w-full py-4 px-6 mt-10 rounded-xl text-base font-medium hover:bg-[#0155af] cursor-pointer'>Send Message</button>
        </form>
      </div>
     </div>
    </div>
  )
}

export default page