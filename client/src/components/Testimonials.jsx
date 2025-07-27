import React from "react";
import { assets, testimonialsData } from "../assets/assets";

const Testimonials = () => {
  return (
    <div className="px-4 py-8 max-w-5xl mx-auto">
      {/* Title */}
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent mb-8">
        Customer Testimonials
      </h1>

      <div className="space-y-8">
        {testimonialsData.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-6 rounded-lg flex flex-col md:flex-row items-center gap-4"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.author}
              className="w-20 h-20 rounded-full object-cover"
            />

            {/* Text and Info */}
            <div>
              <p className="text-gray-700 italic mb-2">"{item.text}"</p>
              <div>
                <p className="font-semibold text-gray-900">{item.author}</p>
                <p className="text-sm text-gray-500">{item.jobTitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
