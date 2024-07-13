"use client";
import { useRef, useState } from "react";

export default function CarouselContent({
  item,
  children,
  showDots = false,
}: {
  item: any[];
  children: any;
  showDots?: boolean;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? item.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === item.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  const handleDragStart = (position: number) => {
    setIsDragging(true);
    setStartPosition(position);
    setPrevTranslate(currentTranslate);
  };

  const handleDragMove = (position: number) => {
    if (isDragging) {
      const currentPosition = position;
      const diff = currentPosition - startPosition;
      setCurrentTranslate(prevTranslate + diff);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    const movedBy = currentTranslate - prevTranslate;
    if (movedBy < -50) {
      nextSlide();
    } else if (movedBy > 50) {
      prevSlide();
    }
    setCurrentTranslate(0);
    setPrevTranslate(0);
  };

  const getTouchPosition = (event: React.TouchEvent) => {
    return event.touches[0].clientX;
  };

  const getMousePosition = (event: React.MouseEvent) => {
    return event.clientX;
  };

  const btnStyles =
    "absolute top-1/2 transform -translate-y-1/2 bg-dark-400 p-2 rounded-lg shadow scale-0 group-hover:scale-100 transition-all disabled:opacity-50";
  return (
    <div
      className="relative w-full h-64 overflow-hidden group"
      ref={carouselRef}
      onMouseDown={(e) => handleDragStart(getMousePosition(e))}
      onMouseMove={(e) => handleDragMove(getMousePosition(e))}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={(e) => handleDragStart(getTouchPosition(e))}
      onTouchMove={(e) => handleDragMove(getTouchPosition(e))}
      onTouchEnd={handleDragEnd}
    >
      <div
        className="absolute inset-0 transition-transform duration-500 flex"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {children}
      </div>
      <button
        className={`${btnStyles} left-2`}
        onClick={prevSlide}
        disabled={currentIndex === 0}
      >
        prev
      </button>
      <button
        className={`${btnStyles} right-2`}
        onClick={nextSlide}
        disabled={currentIndex === item.length - 1}
      >
        next
      </button>
      {showDots && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {item.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-gray-800" : "bg-gray-400"
                }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
