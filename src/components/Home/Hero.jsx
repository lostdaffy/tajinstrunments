import React from "react";
import {
  ChevronRight,
  Phone,
  BookOpen,
  Star,
  Users,
  Award,
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
                  {" "}Taj Enterprises
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
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sky-300 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="group bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <Phone size={18} className="sm:w-5 sm:h-5" />
                Contact Us
                <ChevronRight
                  size={14}
                  className="sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button className="group bg-white/10 backdrop-blur-sm text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
                <BookOpen size={18} className="sm:w-5 sm:h-5" />
                View Categories
              </button>
            </div>
          </div>

          {/* Right - Responsive Image Grid */}
          <div className="relative order-1 lg:order-2 w-full">
            {/* Mobile Layout - Single Column Stack */}
            <div className="block sm:hidden space-y-4 max-w-xs mx-auto">
              {/* Main Featured Image */}
              <div className="relative w-full h-64 shadow-2xl rounded-xl overflow-hidden transform hover:scale-105 transition duration-500">
                <img src="/images/survey-instruments.webp" alt="Survey Instruments" className="w-full h-full object-cover" />
                <div className="absolute bottom-3 left-3 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <Award className="text-yellow-400" size={16} />
                    <span className="font-semibold text-sm">Premium Quality</span>
                  </div>
                  <p className="text-xs opacity-90">Excellence in every detail</p>
                </div>
              </div>
              
              {/* Secondary Images */}
              <div className="grid grid-cols-2 gap-3">
                <div className="relative w-full h-40 shadow-xl rounded-xl overflow-hidden transform hover:scale-105 transition duration-500">
                  <img src="/images/drawing-tools.webp" alt="Drawing Tools" className="w-full h-full object-cover" />
                  <div className="absolute bottom-2 left-2 text-white text-xs font-semibold flex items-center gap-1">
                    <Users className="text-green-400" size={12} />
                    Expert Team
                  </div>
                </div>
                <div className="relative w-full h-40 shadow-xl rounded-xl overflow-hidden transform hover:scale-105 transition duration-500">
                  <img src="/images/civil-lab.webp" alt="Civil Lab Equipment" className="w-full h-full object-cover" />
                  <div className="absolute bottom-2 left-2 text-white text-xs font-semibold flex items-center gap-1">
                    <Star className="text-yellow-400" size={12} />
                    Innovation
                  </div>
                </div>
              </div>
            </div>

            {/* Tablet Layout - 2 Column Grid */}
            <div className="hidden sm:block md:hidden max-w-lg mx-auto">
              <div className="grid grid-cols-2 gap-4 items-start">
                {/* Left Column - Stacked Images */}
                <div className="space-y-4">
                  <div className="relative w-full h-48 shadow-xl rounded-xl overflow-hidden transform hover:scale-105 transition duration-500">
                    <img src="/images/survey-instruments.webp" alt="Drawing Tools" className="w-full h-full object-cover" />
                    <div className="absolute bottom-2 left-2 text-white text-sm font-semibold flex items-center gap-2">
                      <Users className="text-green-400" size={14} />
                      Expert Team
                    </div>
                  </div>
                  <div className="relative w-full h-48 shadow-xl rounded-xl overflow-hidden transform hover:scale-105 transition duration-500">
                    <img src="/images/drawing-tools.webp" alt="Civil Lab Equipment" className="w-full h-full object-cover" />
                    <div className="absolute bottom-2 left-2 text-white text-sm font-semibold flex items-center gap-2">
                      <Star className="text-yellow-400" size={14} />
                      Innovation
                    </div>
                  </div>
                </div>
                
                {/* Right Column - Main Featured Image */}
                <div className="relative w-full h-full min-h-[400px] shadow-2xl rounded-xl overflow-hidden transform hover:scale-105 transition duration-500">
                  <img src="/images/civil-lab.webp" alt="Survey Instruments" className="w-full h-full object-cover" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <Award className="text-yellow-400" size={18} />
                      <span className="font-semibold">Premium Quality</span>
                    </div>
                    <p className="text-sm opacity-90">Excellence in every detail</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Layout - 3 Column Layout */}
            <div className="hidden md:flex items-center justify-center gap-4 lg:gap-6">
              {/* Left Small Image */}
              <div className="relative w-[180px] lg:w-[220px] h-[240px] lg:h-[300px] xl:h-[320px] z-10 shadow-xl rounded-2xl overflow-hidden transform hover:scale-105 transition duration-500">
                <img src="/images/survey-instruments.webp" alt="Drawing Tools" className="w-full h-full object-cover" />
                <div className="absolute bottom-3 left-3 text-white text-sm font-semibold flex items-center gap-2">
                  <Users className="text-green-400" size={16} />
                  Expert Team
                </div>
              </div>

              {/* Central Large Image */}
              <div className="relative w-[220px] lg:w-[280px] xl:w-[320px] h-[320px] lg:h-[420px] xl:h-[480px] z-20 shadow-2xl rounded-xl overflow-hidden transform hover:scale-105 transition duration-500">
                <img src="/images/drawing-tools.webp" alt="Survey Instruments" className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <Award className="text-yellow-400" size={20} />
                    <span className="font-semibold">Premium Quality</span>
                  </div>
                  <p className="text-sm opacity-90">Excellence in every detail</p>
                </div>
              </div>

              {/* Right Small Image */}
              <div className="relative w-[180px] lg:w-[220px] h-[240px] lg:h-[300px] xl:h-[320px] z-10 shadow-xl rounded-2xl overflow-hidden transform hover:scale-105 transition duration-500">
                <img src="/images/civil-lab.webp" alt="Civil Lab Equipment" className="w-full h-full object-cover" />
                <div className="absolute bottom-3 left-3 text-white text-sm font-semibold flex items-center gap-2">
                  <Star className="text-yellow-400" size={16} />
                  Innovation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;