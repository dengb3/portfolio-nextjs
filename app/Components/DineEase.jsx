"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

const DineEaseImages = [
  "/DineEase.PNG",
  "/DineEaseMenu.PNG",
  "/DineEaseTables.PNG",
];

function DineEase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % DineEaseImages.length);
    slideRef.current.classList.add("fade-anim");
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? DineEaseImages.length - 1 : prevIndex - 1
    );
  };

  const slideRef = useRef();

  useEffect(() => {
    // startSlider();
  }, []);

  const startSlider = () => {
    setInterval(() => {
      handleNext();
    }, 3000);
  };

  return (
    <div ref={slideRef} className="w-full select-none relative">
      <div className="aspect-w-16 aspect-h-9">
        <Image
          width={900}
          height={596}
          src={DineEaseImages[currentIndex]}
          alt=""
        />
      </div>
      <div className="absolute w-full top-1/2 transform -translate-y-1/2 py-2 px-3 justify-between flex items-center">
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default DineEase;
