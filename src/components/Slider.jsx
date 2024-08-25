"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const slides = [
  {
    id: 1,
    title: "Slide 1",
    description: "This is the first slide.",
    img: "https://images.pexels.com/photos/26455239/pexels-photo-26455239/free-photo-of-dolphin-swimming-in-blue-water.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "https://example.com/slide1",
    bg: "#f0f0f0",
  },
  {
    id: 2,
    title: "Slide 2",
    description: "This is the second slide.",
    img: "https://images.pexels.com/photos/26455239/pexels-photo-26455239/free-photo-of-dolphin-swimming-in-blue-water.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "https://example.com/slide2",
    bg: "#e0e0e0",
  },
  {
    id: 3,
    title: "Slide 3",
    description: "This is the third slide.",
    img: "https://images.pexels.com/photos/26455239/pexels-photo-26455239/free-photo-of-dolphin-swimming-in-blue-water.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "https://example.com/slide3",
    bg: "#d0d0d0",
  },
  // Add more slides here
];


const Slider = () => {
    const [current,setCurrent]=useState(0);

    
    
    return (
      <div className="h-[calc(100vh-80px)] overflow-hidden">
        <div className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{transform:`translateX(-${current*100}vw)`}}
        >
          {slides.map((slide) => (
            <div
              className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
              key={slide.id}
            >
              <div className="h-1/2 xl:h-full xl:w-1/2 flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
                <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                  {slide.description}
                </h2>
                <h2 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
                  {slide.title}
                </h2>
                <Link href={slide.url}>
                  <button className="rounded-md bg-black text-white py-3 px-4">
                    Shop
                  </button>
                </Link>
              </div>
              <div className="h-1/2 xl:h-full xl:w-1/2 relative">
                <Image
                  src={slide.img}
                  alt=""
                  fill
                  sizes="100%"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
          {
            slides.map((slide,index)=>(
                <div className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center 
                    ${current===index?"scale-150":""}`} key={slide.id}
                    onClick={()=>setCurrent(index)}
                    >
                        {current==index && (
                            <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
                        )}
                </div>
            ))
          }
        </div>
      </div>
    );
};

export default Slider;