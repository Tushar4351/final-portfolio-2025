"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SliderItem from "./SliderItem";
import SliderIndicators from "./SliderIndicators";
import SliderControls from "./SliderControls";
const images = [
  "/images/Tushar.jpg",
  "/images/home/Tushar1.JPG",
  // "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
];

const Slider = () => {
  const [[currentIndex, direction], setSlide] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slideCount = images.length;

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, isAutoPlaying]);

  const nextSlide = () => {
    setSlide((prev) => [(prev[0] + 1) % slideCount, 1]);
  };

  const previousSlide = () => {
    setSlide((prev) => [(prev[0] - 1 + slideCount) % slideCount, -1]);
  };

  const goToSlide = (index: number) => {
    const direction = index > currentIndex ? 1 : -1;
    setSlide([index, direction]);
  };

  return (
    <motion.div
      className="relative rounded-xl w-full h-full overflow-hidden"
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      animate={{ clipPath: "inset(0 0 0% 0)" }}
      transition={{
        duration: 1.2,
        ease: [0.76, 0, 0.24, 1],
      }}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {images.map((image, index) => (
        <SliderItem
          key={index}
          image={image}
          isActive={index === currentIndex}
          direction={direction}
        />
      ))}
      <SliderControls onPrevious={previousSlide} onNext={nextSlide} />
      <SliderIndicators
        total={slideCount}
        current={currentIndex}
        onSelect={goToSlide}
      />
    </motion.div>
  );
};

export default Slider;
