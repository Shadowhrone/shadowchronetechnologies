"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    title: "Installation of Elevators and Escalators",
    description: "We install and fix elevators and escalators",
    img: "/elev.svg",
  },
  {
    title: "Installation of Automatic Remote Gates and Doors",
    description:
      "We install and fix automatic remote gates, roller shutters and garage doors, and automatic sensor doors",
    img: "/gate.svg",
  },
  {
    title: "Installation of Boom Barriers and Access Control System",
    description:
      "We install boom barriers, and also fix access control systems.",
    img: "/boombar.svg",
  },
    {
    title: "Installation of Elevators and Escalators",
    description: "We install and fix elevators and escalators",
    img: "/elev.svg",
  },
  {
    title: "Installation of Automatic Remote Gates and Doors",
    description:
      "We install and fix automatic remote gates, roller shutters and garage doors, and automatic sensor doors",
    img: "/gate.svg",
  },
  {
    title: "Installation of Boom Barriers and Access Control System",
    description:
      "We install boom barriers, and also fix access control systems.",
    img: "/boombar.svg",
  },
];

export default function Services() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const firstCard = container.querySelector(".service-card");
    const cardWidth = firstCard
      ? firstCard.offsetWidth +
        parseInt(getComputedStyle(firstCard).marginRight || 0)
      : 925;

    if (direction === "right") {
      // If at (or near) the end → reset to start
      if (container.scrollLeft + container.offsetWidth >= container.scrollWidth - 10) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    } else {
      // If at (or near) the start → jump to end
      if (container.scrollLeft <= 0) {
        container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
      } else {
        container.scrollBy({ left: -cardWidth, behavior: "smooth" });
      }
    }
  };

  // 🔹 Auto scroll every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      scroll("right");
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-[1538px] mx-auto py-20">
      <h1 className="text-[45px] font-medium text-center text-[#1A78D6] mb-8">Our Services</h1>

      <div className="relative justify-center flex items-center">
        {/* Left arrow */}
        <button
          aria-label="scroll left"
          onClick={() => scroll("left")}
          className="absolute left-2 z-20 bg-white p-2 rounded-full shadow hover:bg-gray-100"
          type="button"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto w-[95%] gap-6 px-6 hide-scrollbar py-2 scroll-smooth"
        >
          {services.map((service, idx) => (
            <div
              key={idx}
              className="service-card min-w-[925px] max-w-[925px] flex-shrink-0 rounded-2xl shadow-md relative"
            >
              <h2 className="text-2xl text-center font-semibold py-3 text-black px-4">
                {service.title}
              </h2>

              <div className="w-full relative">
                <Image
                  src={service.img}
                  width={800}
                  height={400}
                  alt={service.title}
                  className="w-full h-[500px] object-cover rounded-2xl"
                />

                <div className="backdrop-blur-xl bg-white/20 p-6 absolute bottom-6 w-85 left-6 right-6 rounded-2xl shadow-lg border border-white/20">
                  <p className="text-lg font-medium text-white">
                    {service.description}
                  </p>
                  <button className="bg-[#030D3C] py-2 px-4 text-lg text-white rounded-lg mt-4 hover:bg-blue-800 cursor-pointer">
                    Contact us
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button
          aria-label="scroll right"
          onClick={() => scroll("right")}
          className="absolute right-2 z-20 bg-white p-2 rounded-full shadow hover:bg-gray-100"
          type="button"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
