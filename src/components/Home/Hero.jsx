import React from "react";
import { Link } from "react-router-dom";

import {
  ChevronRight,
  Phone,
  BookOpen,
  Star,
  Users,
  Award,
  Navigation,
} from "lucide-react";

const Hero = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-12 lg:py-16">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <span className="inline-block px-3 sm:px-4 py-2 bg-sky-500/20 text-sky-300 rounded-full text-xs sm:text-sm font-semibold backdrop-blur-sm">
                ✨ Welcome to Excellence
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                Welcome to
                <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent block sm:inline">
                  {" "}
                  Taj Enterprises
                </span>
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-2xl">
                Explore a wide range of premium Survey Instruments, precision
                Drawing Tools, reliable Civil Lab Equipment, and authentic
                Indian Brass Handicrafts — all in one place. Perfect for
                professionals and collectors alike.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              {[
                { label: "Happy Clients", value: "500+" },
                { label: "Years Experience", value: "10+" },
                { label: "Success Rate", value: "98%" },
              ].map((stat, i) => (
                <div className="text-center" key={i}>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sky-300 text-xs sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Phone size={18} className="sm:w-5 sm:h-5" />
                Contact Us
                <ChevronRight
                  size={14}
                  className="sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                to="/instruments"
                className="group bg-white/10 backdrop-blur-sm text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <BookOpen size={18} className="sm:w-5 sm:h-5" />
                View Categories
              </Link>
            </div>
          </div>

          {/* Right - Enhanced 4 Image Layout */}
          <div className="relative order-1 lg:order-2 w-full">
            {/* Mobile Layout - 2x2 Grid */}
            <div className="block sm:hidden max-w-sm mx-auto">
              <div className="grid grid-cols-2 gap-3">
                {/* Top Row */}
                <div className="space-y-3">
                  <div className="relative w-full h-32 shadow-xl rounded-xl overflow-hidden transform hover:scale-105 transition duration-500">
                    <img
                      src="/images/survey-instruments.webp"
                      alt="Survey Instruments"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-2 left-2 text-white text-xs font-semibold flex items-center gap-1">
                      <Navigation className="text-blue-400" size={12} />
                      Survey
                    </div>
                  </div>
                  <div className="relative w-full h-32 shadow-xl rounded-xl overflow-hidden transform hover:scale-105 transition duration-500">
                    <img
                      src="/images/civil-lab.webp"
                      alt="Civil Lab Equipment"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-2 left-2 text-white text-xs font-semibold flex items-center gap-1">
                      <Star className="text-yellow-400" size={12} />
                      Lab
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="relative w-full h-32 shadow-xl rounded-xl overflow-hidden transform hover:scale-105 transition duration-500">
                    <img
                      src="/images/drawing-tools.webp"
                      alt="Drawing Tools"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-2 left-2 text-white text-xs font-semibold flex items-center gap-1">
                      <Users className="text-green-400" size={12} />
                      Tools
                    </div>
                  </div>
                  <div className="relative w-full h-32 shadow-xl rounded-xl overflow-hidden transform hover:scale-105 transition duration-500">
                    <img
                      src="/images/Permeability-Apparatus.webp"
                      alt="Soil Testing"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-2 left-2 text-white text-xs font-semibold flex items-center gap-1">
                      <Award className="text-orange-400" size={12} />
                      Soild
                    </div>
                  </div>
                </div>
              </div>

              {/* Featured Badge */}
              <div className="mt-4 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-500/20 to-blue-500/20 rounded-full border border-sky-400/30 backdrop-blur-sm">
                  <Award className="text-yellow-400" size={16} />
                  <span className="text-white text-sm font-semibold">
                    Premium Quality Products
                  </span>
                </div>
              </div>
            </div>

            {/* Tablet Layout - Asymmetric Grid */}
            <div className="hidden sm:block md:hidden max-w-2xl mx-auto">
              <div className="grid grid-cols-3 grid-rows-2 gap-4 h-96">
                {/* Large featured image spans 2x2 */}
                <div className="col-span-2 row-span-2 relative shadow-2xl rounded-xl overflow-hidden transform hover:scale-105 transition duration-500">
                  <img
                    src="/images/survey-instruments.webp"
                    alt="Survey Instruments"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="text-yellow-400" size={20} />
                      <span className="font-bold text-lg">Premium Quality</span>
                    </div>
                    <p className="text-sm opacity-90">
                      Excellence in every detail
                    </p>
                  </div>
                </div>

                {/* Right column - 2 stacked images */}
                <div className="relative shadow-xl rounded-xl overflow-hidden transform hover:scale-105 transition duration-500">
                  <img
                    src="/images/drawing-tools.webp"
                    alt="Drawing Tools"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-2 left-2 text-white text-sm font-semibold flex items-center gap-2">
                    <Users className="text-green-400" size={14} />
                    Drawing Tools
                  </div>
                </div>

                <div className="relative shadow-xl rounded-xl overflow-hidden transform hover:scale-105 transition duration-500">
                  <img
                    src="/images/civil-lab.webp"
                    alt="Civil Lab Equipment"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-2 left-2 text-white text-sm font-semibold flex items-center gap-2">
                    <Star className="text-yellow-400" size={14} />
                    Lab Equipment
                  </div>
                </div>
              </div>

              {/* Bottom row for 4th image */}
              <div className="mt-4 max-w-md mx-auto">
                <div className="relative h-32 shadow-xl rounded-xl overflow-hidden transform hover:scale-105 transition duration-500">
                  <img
                    src="/images/Permeability-Apparatus.webp"
                    alt="Soil Testing"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <Award className="text-orange-400" size={18} />
                        <span className="font-bold">Soil Testing</span>
                      </div>
                      <p className="text-xs opacity-90">
                        Authentic Indian Craftsmanship
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Layout - Creative 4 Image Arrangement */}
            <div className="hidden md:block">
              <div className="relative max-w-4xl mx-auto">
                {/* Main container with relative positioning */}
                <div className="grid grid-cols-4 grid-rows-3 gap-4 h-[500px] lg:h-[600px]">
                  {/* Large featured image - spans 2x3 */}
                  <div className="col-span-2 row-span-3 relative z-20 shadow-2xl rounded-2xl overflow-hidden transform hover:scale-105 transition duration-500">
                    <img
                      src="/images/survey-instruments.webp"
                      alt="Survey Instruments"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="flex items-center gap-3 mb-2">
                        <Award className="text-yellow-400" size={24} />
                        <span className="font-bold text-xl">
                          Survey Instruments
                        </span>
                      </div>
                      <p className="text-base opacity-90 mb-3">
                        Precision & Accuracy Guaranteed
                      </p>
                      <div className="flex items-center gap-2 text-sm bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                        <Navigation className="text-blue-400" size={16} />
                        Professional Grade
                      </div>
                    </div>
                  </div>

                  {/* Top right image */}
                  <div className="col-span-2 row-span-1 relative z-10 shadow-xl rounded-xl overflow-hidden transform hover:scale-105 transition duration-500">
                    <img
                      src="/images/drawing-tools.webp"
                      alt="Drawing Tools"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 text-white">
                      <div className="flex items-center gap-2">
                        <Users className="text-green-400" size={18} />
                        <span className="font-semibold">Drawing Tools</span>
                      </div>
                    </div>
                  </div>

                  {/* Middle right image */}
                  <div className="col-span-2 row-span-1 relative z-10 shadow-xl rounded-xl overflow-hidden transform hover:scale-105 transition duration-500">
                    <img
                      src="/images/civil-lab.webp"
                      alt="Civil Lab Equipment"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60" />
                    <div className="absolute bottom-3 right-3 text-white">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">Lab Equipment</span>
                        <Star className="text-yellow-400" size={18} />
                      </div>
                    </div>
                  </div>

                  {/* Bottom right image */}
                  <div className="col-span-2 row-span-1 relative z-10 shadow-xl rounded-xl overflow-hidden transform hover:scale-105 transition duration-500">
                    <img
                      src="/images/Permeability-Apparatus.webp"
                      alt="Soil Testing"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 text-white text-center">
                      <div className="flex items-center justify-center gap-2">
                        <Award className="text-orange-400" size={18} />
                        <span className="font-semibold">Soil Testing"</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements for visual enhancement */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-sky-400/20 to-blue-500/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
