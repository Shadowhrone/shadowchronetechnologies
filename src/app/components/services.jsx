"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { number } from "../../../data/number";

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
];

export default function Services() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const firstCard = container.querySelector(".service-card");

    const cardWidth = firstCard
      ? firstCard.offsetWidth + 24
      : 300;

    if (direction === "right") {
      if (
        container.scrollLeft + container.offsetWidth >=
        container.scrollWidth - 10
      ) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    } else {
      if (container.scrollLeft <= 0) {
        container.scrollTo({
          left: container.scrollWidth,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({ left: -cardWidth, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => scroll("right"), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full max-w-[1538px] mx-auto px-4 py-16">
      <h1 className="text-3xl sm:text-4xl lg:text-[45px] font-medium text-center text-[#1A78D6] mb-10">
        Our Services
      </h1>

      <div className="relative flex items-center justify-center">
        {/* Left Arrow – hidden on mobile */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-2 z-20 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Scroll container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth w-full px-2 sm:px-6 md:px-12 hide-scrollbar"
        >
          {services.map((service, idx) => (
            <div
              key={idx}
              className="
                service-card
                flex-shrink-0
                w-[85vw]
                sm:w-[70vw]
                md:w-[60vw]
                lg:w-[900px]
                rounded-2xl
                shadow-md
                bg-white
               
              "
            >
              <h2 className="text-lg sm:text-xl lg:text-2xl text-center font-semibold py-4 px-4">
                {service.title}
              </h2>

              <div className="relative w-full ">
                <Image
                  src={service.img}
                  width={900}
                  height={500}
                  alt={service.title}
                  className="
                    w-full
                    h-[220px]
                    sm:h-[300px]
                    md:h-[380px]
                    lg:h-[500px]
                    object-cover
                    rounded-2xl
                  "
                />

                <div className="
                  absolute
                  bottom-4
                  left-4
                  right-4
                  backdrop-blur-xl
                  bg-white/20
                  p-4
                  sm:p-5
                  md:p-6
                  rounded-2xl
                  border border-white/20
                md:w-[50%] w-auto">
                  <p className="text-sm sm:text-base lg:text-lg text-white font-medium">
                    {service.description}
                  </p>

                  <button className="bg-[#030D3C] py-2 px-4 text-sm sm:text-base text-white rounded-lg mt-3 hover:bg-blue-800"  onClick={() => {
    const message = `Hi, I want to make an inquiry about the ${service.title}`;
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }}>
                    Contact us
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow – hidden on mobile */}
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-2 z-20 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
