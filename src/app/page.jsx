'use client'
import Image from "next/image";
import Navbar from "./components/navbar";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Featurecards from "./components/featurecards";
import Services from "./components/services";
import Footer from "./components/footer";



export default function Home() {
  const products = [
    {title:"Biometric Card Attendance",image:'/pfour.svg', description:'Get premium quality Biometric Card Attendance systems for accurate and reliable staff management.'},
     {title:"Hotel Card Door Lock",image:'/pone.svg', description:'Get your Hotel Card Door Lock system for maximum security and seamless guest access.'},
      {title:"Inventory Software",image:'/pfour.svg', description:'Get your Smart inventory management software that helps you track stock, manage sales, and stay organized.'}
  ]
    const items = [
           <div className="relative w-full h-auto" key="1">
    <Image src="/bgone.svg" width={1440} height={300} alt="Slide 2" className="w-full h-[725px] object-cover"  key="2" />
    <div className='top-[360px] lg:left-40 left-10 absolute z-1'>
     <div className="backdrop-blur-xl bg-white/20 p-8 rounded-2xl shadow-lg lg:w-130 w-[70%] text-left px-4 border   border-white/20">
        <h1 className="md:text-5xl text-xl font-bold text-white">Automations for Smart Living</h1>
        <p className="mt-2 text-white/70">
         We blend smart automation with elegant design to craft intuitive, inspiring spaces.
        </p>
      </div>
      <button className="text-white px-[30px] py-[15px] mt-[15px] rounded-[8px] text-[18px] cursor-pointer hover:bg-blend-difference font-[600] bg-[#1B7DDE]">Get Quote</button>
      </div>
    </div>,
         <div className="relative w-full h-auto" key="2">
    <Image src="/bgtwo.svg" width={1440} height={300} alt="Slide 2" className="w-full h-[725px]  object-cover"  key="2" />
    <div className='top-[360px] lg:left-40 left-10 absolute z-1'>
     <div className="backdrop-blur-xl bg-white/20 p-8 rounded-2xl shadow-lg lg:w-130 w-[70%] text-left px-4 border   border-white/20">
        <h1 className="md:text-5xl text-xl font-bold text-white">Seamless Access and Control</h1>
        <p className="mt-2 text-white/70">
         We design our systems to deliver friction-less access across platforms, devices, and geographies.
        </p>
      </div>
      <button className="text-white px-[30px] py-[15px] mt-[15px] rounded-[8px] text-[18px] cursor-pointer hover:bg-blend-difference font-[600] bg-[#1B7DDE]">Get Quote</button>
      </div>
    </div>,
          <div className="relative w-full h-auto" key="3">
    <Image src="/bgthree.svg" width={1440} height={300} alt="Slide 2" className="w-full h-[725px] object-cover"  key="2" />
    <div className='top-[360px] lg:left-40 left-10  absolute z-1'>
     <div className="backdrop-blur-xl bg-white/20 p-8 rounded-2xl shadow-lg lg:w-130 w-[70%] text-left px-4 border border-white/20">
        <h1 className="md:text-5xl text-xl font-bold text-white">Tamper-Resistant Locking Systems</h1>
        <p className="mt-2 text-white/70">
         We provide advanced security features that prevent intruders, and ensures uncompromising safety.
        </p>
      </div>
      <button className="text-white px-[30px] py-[15px] mt-[15px] bg-[#1B7DDE]  rounded-[8px] text-[18px] cursor-pointer hover:bg-blend-difference font-[600] ">Get Quote</button>
      </div>
    </div>,
  ];
  return (
    <div className="min-h-screen  text-black mx-auto max-w-[1530px] font-inter" >
      <Navbar />
    <AliceCarousel
      
      items={items}
      autoPlay
      infinite
      dotsControls
       disableButtonsControls
       autoPlayInterval={3000}
    />
  <Image src="/brand.svg" width={1440} height={300} alt="About Us" className="w-full h-auto mt-8  object-cover"  />
<p className="text-center text-2xl font-medium pt-25 text-[#1225F5]">Features</p>
<h1 className='text-center md:text-[45px] text-3xl'>Our special Features</h1>
<Featurecards/>
<section className=" flex justify-center items-center">
      <div className=" h-auto grid lg:grid-cols-2  items-center justify-center px-6 gap-10 mt-16 mb-20">
       <div className="max-w-[541px]  h-auto">
        <h2 className='text-[#1225F5] text-[20px]'>About the Company</h2>
        <h1 className="lg:text-[40px] text-3xl font-medium mt-[23px]">We render technology solutions for ease and Comfortability.</h1>
        <p className="lg:text-[20px]  text-[#48454B]/80 font-medium">In a world where complexity often overshadows convenience, we believe technology should be intuitive, seamless, and tailored to the rhythm of everyday life.</p>
        <hr className="border-[#C4C4C4] mt-[16px]"/>
        <h2 className='text-[#1225F5] text-[20px] pt-6'>Shadow Chrone Technologies Specializes In:</h2>
              <p className="font-[600] pt-4 pb-[12px] flex justify-left items-center gap-1"><Image src='/tick.svg' alt="tick" width={22} height={22}/>Automations</p>
        <p className=" font-[600] pb-[12px] flex justify-left items-center gap-1"><Image src='/tick.svg' alt="tick" width={22} height={22}/> Access control</p>
        <p className="font-[600] pb-[12px] flex justify-left items-center gap-1"><Image src='/tick.svg' alt="tick" width={22} height={22}/>Security and Safety</p>
        <p className=" font-[600] pb-[12px] flex justify-left items-center gap-1"><Image src='/tick.svg' alt="tick" width={22} height={22}/>Elevators and Escalators</p>
       </div>
       <div className='relative max-w-[541px] flex justify-center flex-col  md:flex-row items-center gap-3'>
        <Image src="/illone.svg" width={249} height={441} alt="illone" className="md:w-[249px] md:h-[441px] w-[285px] h-[300px] object-cover" />
        <div className='relative w-auto flex flex-col justify-center items-center gap-3'>
         <Image src="/illtwo.svg" width={285} height={300} alt="illtwo"  />
          <Image src="/illthree.svg" width={285} height={300} alt="illthree"  />
          </div>
       </div>
      </div>
      </section>
    <section className='w-full h-auto text-center bg-[#021142] text-white py-[130px] flex justify-center flex-col items-center'>
   <h1 className=" md:text-[40px] text-2xl text-center px-4.5 font-medium ">Checkout Some Of Our Previous Project </h1>
   <button className='mt-6 md:text-2xl text-lg'>Watch video</button>
    </section>
    <section>
          <Services/>
     
    </section>
    <section className=" px-5 md:px-8 lg:px-20 py-20 ">
      <h1 className="text-[#1A78D6] lg:text-[60px] md:text-5xl text-4xl font-medium ">Products</h1>
      <h2 className='font-medium md:text-[45px] text-3xl xl:w-[58%] w-[95%] leading-[56px] '>We offer wide range of products for ease and comfortability.</h2>
      <p className='pt-6 text-[#48454B]/80 text-[20px] font-medium xl:w-[38%] w-[60%]'>Request for your desired product from us today, and get it delivered to you as soon as possible as we are reliable.</p>
      
       <div className=" w-full  md:grid-cols-3 grid-cols-1  grid  mt-20 justify-center gap-8 items-center mx-auto">
        {products.map((product, index) => (
          <div key={index} className="   py-10  shadow-xl  rounded-[25px]">
          <div key={index} className=" flex  flex-col justify-between  items-center text-center  ">
             <Image src={product.image} width={320} height={286} alt='svg' className=' rounded-[18px]' />
              <h1 className='text-[24px] pt-[5px] font-semibold text-[#48454B]/80 leading-10 text-left'>{product.title}</h1>
             
              <p className='text-[14px] font-medium text-black/50 text-center w-[80%]'>{product.description}</p>
              <button className='text-white text-medium bg-[#1A78D6] text-center rounded-bl-[8px] cursor-pointer rounded-tr-[8px] w-[176px] py-[18px] mt-[50px]'>Get a quote</button>
            </div>
            </div>
        ))}
        </div>
       
    </section>
    <Footer/>
    </div>
  );
}
