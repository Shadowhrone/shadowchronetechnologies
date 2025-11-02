import React from 'react'
import Image from 'next/image'
const cardData = [
    {img:'/ac.svg', title: "Access Control", description: "Borem ipsum dolor sit amet, consectetur adipiscing elit." },
    {img:'/au.svg', title: "Automations", description: "Borem ipsum dolor sit amet, consectetur adipiscing elit." },
    {img:'/ss.svg', title: "Security & Safety", description: "Borem ipsum dolor sit amet, consectetur adipiscing elit." },
    {img:'/ee.svg', title: "Elevator & Escalator", description: "Borem ipsum dolor sit amet, consectetur adipiscing elit." },
]

const Featurecards = () => {
  return (
<div className="h-auto flex items-center mt-8 justify-center ">
  <div className="grid grid-cols-2 grid-rows-2  gap-[20px]">
    {cardData.map((card, index) => (
      <div
        key={index}
        className="w-[545px] h-[335px] border border-[rgba(18,37,245,0.2)] rounded-[8px] flex flex-col justify-center items-center text-black gap-[18px]"
      >
        <Image src={card.img} width={60} height={60} alt={card.title} />
        <h1 className="text-3xl text-[#030D3C] font-bold">{card.title}</h1>
        <h2 className="text-[#48454B] opacity-70 font-semibold">
          {card.description}
        </h2>
      </div>
    ))}
  </div>
</div>

  )
}

export default Featurecards