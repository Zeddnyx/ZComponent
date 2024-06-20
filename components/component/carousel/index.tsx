"use client";
import { useScrollableSlider } from "@/hooks";
import { useState } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const {
    sliderEl,
    sliderPrevBtn,
    sliderNextBtn,
    scrollToTheRight,
    scrollToTheLeft,
  } = useScrollableSlider();

  const LENGTH = 10;

  return (
    <div className="relative w-full">
      <div className="overflow-hidden">
        <div
          className="flex w-full gap-5 overflow-x-scroll no-scrollbar"
          ref={sliderEl}
        >
          {Array.from({ length: LENGTH }).map((_, index) => (
            <div
              key={index}
              className="w-96 h-20 shrink-0 bg-gray-300 flex items-center justify-center"
            >
              <p className="font-bold text-dark">{index}</p>
            </div>
          ))}
        </div>
      </div>
      <button ref={sliderPrevBtn} onClick={() => scrollToTheLeft()}>
        Prev
      </button>
      <button ref={sliderNextBtn} onClick={() => scrollToTheRight()}>
        Next
      </button>
      <div>
        {Array.from({ length: LENGTH }).map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={currentSlide === index ? "w-10" : "w-5"}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
