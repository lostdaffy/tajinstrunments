import React from "react";
import { Link } from "react-router-dom";


const InstrumentsCategory = () => {
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
      title: "Indian Brass Handicrafts",
      image: "images/indian-teapots.webp",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen px-2 sm:px-4 lg:px-6 py-6 sm:py-8 lg:py-10">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-10 mb-6 sm:mb-8">
          {/* Left Sidebar */}
          <div className="w-full lg:w-80 xl:w-85 space-y-4 sm:space-y-5">
            {/* Main Title */}
            <div className="bg-gray-200 p-4 sm:p-6 rounded">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-800 leading-tight">
                Categories
              </h1>
            </div>

            {/* Categories - Hidden on mobile, visible on desktop */}
            <div className="hidden lg:block bg-gray-200 p-4 sm:p-6 rounded">
              <h3 className="text-sm sm:text-base font-bold text-gray-700 mb-3 sm:mb-4">
                Categories
              </h3>
              <ul className="space-y-2">
                {categories.map((item, index) => (
                  <li key={index} className="py-1 sm:py-2">
                    <Link
                      to="/instruments"
                      className="text-sm sm:text-base cursor-pointer hover:text-blue-600 transition-colors duration-200"
                    >
                      → {item.title} Instruments
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Categories Dropdown/List */}
            <div className="lg:hidden bg-gray-200 p-4 rounded">
              <h3 className="text-base font-bold text-gray-700 mb-3">
                Quick Navigation
              </h3>
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-2">
                {categories.map((item, index) => (
                  <Link
                    key={index}
                    to="/instruments"
                    className="text-sm cursor-pointer hover:text-blue-600 transition-colors duration-200 py-1 px-2 rounded hover:bg-gray-100"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Grid Container */}
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
              {categories.map((item, index) => (
                <Link 
                  to="/instruments" 
                  key={index} 
                  className="block group"
                >
                  <div className="rounded-lg p-3 sm:p-4 h-full transition-transform duration-200 hover:scale-105">
                    <div className="aspect-square mb-3 sm:mb-4">
                      <img
                        src={item.image}
                        className="w-full h-full object-cover rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl transition-shadow duration-200 group-hover:shadow-xl"
                        alt={item.title}
                        loading="lazy"
                      />
                    </div>
                    <div className="text-center sm:text-end">
                      <h3 className="text-sm sm:text-base font-bold text-sky-800 mb-1 transition-colors duration-200 group-hover:text-sky-600">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstrumentsCategory;