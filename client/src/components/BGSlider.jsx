import React, { useState } from "react";
import "../BGSlider.css";

const BGSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <div className="pb-10 md:py-20 mx-2">
      {/* Title */}
      <h1 className="mb-12 sm:mb-20 text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
        Remove Background with High Quality
      </h1>

      {/* Slider Area */}
      <div className="relative w-full max-w-3xl overflow-hidden m-auto rounded-xl">
        {/* Background Image */}
        <img
          src="/mypic.png"
          className="w-full h-full object-contain"
          style={{ clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0)` }}
          alt=""
        />

        {/* Foreground Image */}
        <img
          src="/mypicnobg.png"
          className="absolute top-0 left-0 w-full h-full object-contain"
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
          alt=""
        />

        {/* Slider */}
        <input
          type="range"
          min={0}
          max={100}
          value={sliderPosition}
          onChange={handleSliderChange}
          className="slider absolute bottom-3 left-1/2 -translate-x-1/2 w-[90%] z-10"
        />
      </div>
    </div>
  );
};

export default BGSlider;
