import React from "react";
import {
  ChevronRight,
  Phone,
  BookOpen,
  Star,
  Users,
  Award,
} from "lucide-react";

import survey_instruments from "../../assets/survey-instruments.jpg";
import drawing_tools from "../../assets/drawing-tools.jpg";
import civil_lab from "../../assets/civil-lab.jpg";

const Hero = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-16">
          {/* Left */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-2 bg-sky-500/20 text-sky-300 rounded-full text-sm font-semibold backdrop-blur-sm">
                ✨ Welcome to Excellence
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
                Welcome to
                <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                  Taj Enterprises
                </span>
              </h1>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-2xl">
                Explore a wide range of premium Survey Instruments, precision
                Drawing Tools, reliable Civil Lab Equipment, and authentic
                Indian Brass Handicrafts — all in one place. Perfect for
                professionals and collectors alike.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-6">
              {[
                { label: "Happy Clients", value: "500+" },
                { label: "Years Experience", value: "15+" },
                { label: "Success Rate", value: "98%" },
              ].map((stat, i) => (
                <div className="text-center" key={i}>
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sky-300 text-xs md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="group bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <Phone size={20} />
                Contact Us
                <ChevronRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button className="group bg-white/10 backdrop-blur-sm text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center gap-2">
                <BookOpen size={20} />
                View Categories
              </button>
            </div>
          </div>

          {/* Right - Responsive Image Grid */}
          <div className="relative flex flex-col lg:flex-row items-center justify-center gap-6">
            {/* Left Small Image */}
            <div className="relative w-[80%] sm:w-[220px] h-[280px] lg:h-[300px] z-10 shadow-xl rounded-2xl overflow-hidden transform hover:scale-105 transition duration-500">
              <img src={drawing_tools} alt="Drawing Tools" className="w-full h-full object-cover" />
              <div className="absolute bottom-3 left-3 text-white text-sm font-semibold flex items-center gap-2">
                <Users className="text-green-400" size={16} />
                Expert Team
              </div>
            </div>

            {/* Central Large Image */}
            <div className="relative w-[85%] sm:w-[260px] h-[380px] lg:w-[300px] lg:h-[450px] z-20 shadow-2xl rounded-xl overflow-hidden transform hover:scale-105 transition duration-500">
              <img src={survey_instruments} alt="Survey Instruments" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-4 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="text-yellow-400" size={20} />
                  <span className="font-semibold">Premium Quality</span>
                </div>
                <p className="text-sm opacity-90">Excellence in every detail</p>
              </div>
            </div>

            {/* Right Small Image */}
            <div className="relative w-[80%] sm:w-[220px] h-[280px] lg:h-[300px] z-10 shadow-xl rounded-2xl overflow-hidden transform hover:scale-105 transition duration-500">
              <img src={civil_lab} alt="Civil Lab Equipment" className="w-full h-full object-cover" />
              <div className="absolute bottom-3 left-3 text-white text-sm font-semibold flex items-center gap-2">
                <Star className="text-yellow-400" size={16} />
                Innovation
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
