import React from "react";
import { Link } from "react-router-dom";
import survey_instruments from "../../assets/survey-instruments.jpg";
import drawing_tools from "../../assets/drawing-tools.jpg";
import civil_lab from "../../assets/civil-lab.jpg";
import indian_teapots from "../../assets/indian-teapots.jpg";

const InstrumentsCategory = () => {
  const categories = [
    {
      title: "Survey",
      image: survey_instruments,
    },
    {
      title: "Drawing",
      image: drawing_tools,
    },
    {
      title: "Civil Lab",
      image: civil_lab,
    },
    {
      title: "Indian Brass Handicrafts",
      image: indian_teapots,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen px-4 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex gap-10 mb-8">
          {/* Left Sidebar */}
          <div className="w-85 space-y-5">
            {/* Main Title */}
            <div className="bg-gray-200 p-6 rounded">
              <h1 className="text-2xl font-bold text-gray-800 leading-tight">
                Categories
              </h1>
            </div>

            {/* Categories */}
            <div className="bg-gray-200 p-6 rounded">
              <h3 className="text-base font-bold text-gray-700 mb-4">
                Categories
              </h3>
              {categories.map((item, index) => (
                <li className="py-2">
                  <Link
                    to="/instruments"
                    className="text-base cursor-pointer hover:text-blue-600"
                  >
                    → {item.title} Instruments
                  </Link>
                </li>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Grid Container */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((item, index) => (
                <Link to="/instruments" key={index} className="block">
                  <div className=" rounded-lg p-4 h-full">
                    <div className="aspect-square mb-4">
                      <img
                        src={item.image}
                        className="w-full h-full object-cover rounded-2xl shadow-2xl"
                        alt={item.title}
                      />
                    </div>
                    <div className="text-end">
                      <h3 className="text-base font-bold text-sky-800 mb-1">
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
