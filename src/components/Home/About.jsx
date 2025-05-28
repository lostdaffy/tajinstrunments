import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center py-10">
      <div className="container px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-sky-400 to-blue-500 text-white text-sm font-semibold rounded-full shadow-md max-w-max">
              Trusted Excellence Since 2015
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
              <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                About the
              </span>
              <br />
              Taj Enterprises
            </h1>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Welcome to Taj Enterprises, your one-stop shop for premium tools and authentic craftsmanship. We specialize in high-quality survey instruments, precision drawing tools, reliable civil lab equipment, and exquisite Indian brass handicrafts—perfect for professionals and collectors alike.
            </p>

            <ul className="list-disc list-inside space-y-3 text-gray-700 text-base">
              <li>
                <strong>Survey Instruments:</strong> Accurate and durable tools trusted by professionals.
              </li>
              <li>
                <strong>Drawing Tools:</strong> Quality instruments for all your technical needs.
              </li>
              <li>
                <strong>Civil Lab Equipment:</strong> Reliable gear for engineering labs.
              </li>
              <li>
                <strong>Indian Brass Handicrafts:</strong> Traditional brass art showcasing India’s heritage.
              </li>
            </ul>
          </div>

          {/* Image Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Main Image */}
            <div className="col-span-1 sm:col-span-2 relative group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500 opacity-20 pointer-events-none"></div>
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-shadow duration-500">
                <img
                  src="images/drawing-tools.jpg"
                  className="w-full h-auto aspect-video object-cover"
                  alt="Professional Land Surveying"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-lg font-semibold">
                    Professional Land Surveying
                  </p>
                  <p className="text-sm opacity-90">
                    Precision mapping and measurement
                  </p>
                </div>
              </div>
            </div>

            {/* Two Smaller Images */}
            <div className="relative group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl transform -rotate-2 group-hover:-rotate-3 transition-transform duration-500 opacity-20 pointer-events-none"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
                <img
                  src="images/civil-lab.jpg"
                  className="w-full h-auto aspect-square object-cover"
                  alt="Architectural Drafting"
                />
                <div className="absolute bottom-3 left-4 text-gray-700 font-semibold text-xs sm:text-sm">
                  Architectural Drafting
                </div>
              </div>
            </div>

            <div className="relative group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl transform rotate-2 group-hover:rotate-3 transition-transform duration-500 opacity-20 pointer-events-none"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
                <img
                  src="images/indian-teapots.jpg"
                  className="w-full h-auto aspect-square object-cover"
                  alt="Digital CAD Tools"
                />
                <div className="absolute bottom-3 left-4 text-white font-semibold text-xs sm:text-sm">
                  Digital CAD Tools
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
