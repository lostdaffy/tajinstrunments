import React from "react";
import { Check } from "lucide-react";

export default function ConstructionLayout() {
  const images = [
    "images/civil-lab.webp",
    "images/drawing-tools.webp",
    "images/survey-instruments.webp",
  ];

  const features = [
    "Survey & Engineering Instruments",
    "Laboratory Testing Equipment",
    "Scientific & Mathematical Tools",
    "Hydrological Equipment",
    "Soil Testing Instruments",
    "Electronics & Electrical Items",
  ];

  return (
    <div className="flex items-center justify-center bg-gray-50 min-h-screen px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image Grid */}
          <div className="space-y-4">
            <div className="mb-8">
              {/* Company Description Card */}
              <div className="bg-gradient-to-br from-white to-sky-50/50 rounded-2xl p-8 shadow-lg border border-sky-100/50">
                <div className="flex items-start space-x-4">
                  <div className="bg-sky-500 rounded-full p-2 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-xl mb-3">
                      Since 2007
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      M/S Taj Enterprises is an ISO 9001:2015 certified
                      manufacturer and supplier of precision survey,
                      engineering, and laboratory instruments. We provide
                      high-quality scientific equipment and reliable technical
                      solutions to professionals across various industries.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-3 gap-4">
              {images.map((src, index) => (
                <div
                  key={index}
                  className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <img
                    src={src}
                    alt={`Scientific and survey equipment ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div>
              <p className="text-sky-400 font-semibold text-sm uppercase tracking-wider mb-4">
                WHAT WE MANUFACTURE & SUPPLY
              </p>
              <h1 className="text-5xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
                Precision Instruments For Professional Excellence
              </h1>
            </div>

            {/* Features Lists */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {features.slice(0, 3).map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <Check className="w-5 h-5 text-sky-400" />
                    </div>
                    <span className="text-gray-600 text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                {features.slice(3).map((feature, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex items-center space-x-3"
                  >
                    <div className="flex-shrink-0">
                      <Check className="w-5 h-5 text-sky-400" />
                    </div>
                    <span className="text-gray-600 text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ISO Certification Badge */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-sky-400">
              <div className="flex items-center space-x-4">
                <div className="bg-sky-100 rounded-full p-3">
                  <Check className="w-6 h-6 text-sky-400" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">
                    ISO 9001:2015 Certified
                  </h3>
                  <p className="text-gray-600">
                    Quality Management System Certified Company
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Established: December 27, 2007
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
