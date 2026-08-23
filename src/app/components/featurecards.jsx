import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";

const cardData = [
    {img:'/ac.svg', title: "Access Control", description: "We believe that true innovation flourishes when teams have seamless access to the spaces and resources they need. Our access control solutions provide secure, scalable, and intelligent entry management for modern businesses." },
    {img:'/au.svg', title: "Automations", description: "We build intelligent systems that eliminate friction, reduce human error, and streamline daily operations. Our automation solutions help organizations improve efficiency, productivity, and operational performance." },
    {img:'/ss.svg', title: "Security & Safety", description: "In an era defined by digital transformation, security and safety are no longer optional. We deliver advanced monitoring, surveillance, and protection solutions designed to safeguard people, assets, and critical infrastructure." },
    {img:'/ee.svg', title: "Elevator & Escalator", description: "Our intelligent elevator and escalator systems redefine vertical transportation through enhanced safety, reliability, and performance. We provide modern solutions that ensure smooth and efficient movement within buildings." },
]

const Featurecards = () => {
  return (

  <div className="grid md:grid-cols-2 xl:px-50 px-10 mt-8  gap-5">
    {cardData.map((card, index) => (
      <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.6 }}
  transition={{
    duration: 0.7,
    ease: "easeOut",
  }}
        key={index}
        className=" h-83.75 border px-5 border-[rgba(18,37,245,0.2)] rounded-lg flex flex-col justify-center items-center text-black gap-4.5"
      >
        <Image src={card.img} width={60} height={60} alt={card.title} />
        <h1 className="md:text-3xl text-2xl text-center text-[#030D3C] font-bold">{card.title}</h1>
        <h2 className="text-[#48454B] opacity-70 text-center font-semibold">
          {card.description}
        </h2>
      </motion.div>
    ))}
  </div>

  )
}

export default Featurecards