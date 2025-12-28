import React from 'react'
import Image from 'next/image'
const cardData = [
    {img:'/ac.svg', title: "Access Control", description: "We believe that true innovation flourishes when teams have seamless access..." },
    {img:'/au.svg', title: "Automations", description: "We build intelligent systems that eliminate friction, reduce human error, and..." },
    {img:'/ss.svg', title: "Security & Safety", description: "In an era defined by digital transformation, security and safety are no longer..." },
    {img:'/ee.svg', title: "Elevator & Escalator", description: "Our intelligent elevator and escalator systems redefine vertical and..." },
]

const Featurecards = () => {
  return (

  <div className="grid md:grid-cols-2 xl:px-50 px-10 mt-8  gap-5">
    {cardData.map((card, index) => (
      <div
        key={index}
        className=" h-[335px] border px-5 border-[rgba(18,37,245,0.2)] rounded-[8px] flex flex-col justify-center items-center text-black gap-[18px]"
      >
        <Image src={card.img} width={60} height={60} alt={card.title} />
        <h1 className="md:text-3xl text-2xl text-center text-[#030D3C] font-bold">{card.title}</h1>
        <h2 className="text-[#48454B] opacity-70 text-center font-semibold">
          {card.description}
        </h2>
      </div>
    ))}
  </div>

  )
}

export default Featurecards