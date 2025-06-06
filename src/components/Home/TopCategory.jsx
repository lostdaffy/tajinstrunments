import React from "react";
import { Link } from "react-router-dom";

const TopCategory = () => {
  const categories = [
    {
      title: "Survey Instruments",
      image: "images/survey-instruments.webp",
    },
    {
      title: "Drawing Instruments",
      image: "images/drawing-tools.webp",
    },
    {
      title: "Civil Lab Instruments",
      image: "images/civil-lab.webp",
    },
    {
      title: "Soild Testing Instruments",
      image: "images/Permeability-Apparatus.webp",
    },
  ];

  return (
    <div className="w-full py-12 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold pb-2">Explore Categories</h2>
          <span className="text-gray-600">Lorem ipsum dolor sit ipsum dolor sit</span>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((item, index) => (
            <Link to="/products" key={index}>
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl group">
                <div className="absolute top-4 right-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full shadow-md z-10">
                  Premium
                </div>
                <div className="h-52 md:h-60 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs font-semibold tracking-wide uppercase text-gray-500 mb-2">
                    Category
                  </div>
                  <h2 className="text-lg font-bold text-sky-400 mb-3 leading-tight">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    Precision engineering meets timeless design. Swiss movement
                    with sapphire crystal and genuine leather band.
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="pt-10 text-center">
          <Link
            to="/instruments"
            className="inline-block bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View More <i className="ri-arrow-right-line ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopCategory;
