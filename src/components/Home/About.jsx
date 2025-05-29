import React from "react";

const About = () => {
  const imageData = [
    {
      src: "images/drawing-tools.webp",
      alt: "Professional Land Surveying",
      caption: "Land Surveying",
    },
    {
      src: "images/civil-lab.webp",
      alt: "Architectural Drafting",
      caption: "Drafting Tools",
    },
    {
      src: "images/indian-teapots.webp",
      alt: "Civil Lab Equipment",
      caption: "Lab Equipment",
    },
    {
      src: "images/survey-instruments.webp",
      alt: "Brass Handicrafts",
      caption: "Brass Handicrafts",
    },
  ];

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
              Welcome to Taj Enterprises, your one-stop shop for premium tools
              and authentic craftsmanship. We specialize in high-quality survey
              instruments, precision drawing tools, reliable civil lab
              equipment, and exquisite Indian brass handicrafts—perfect for
              professionals and collectors alike.
            </p>

            <ul className="list-disc list-inside space-y-3 text-gray-700 text-base">
              <li>
                <strong>Survey Instruments:</strong> Accurate and durable tools
                trusted by professionals.
              </li>
              <li>
                <strong>Drawing Tools:</strong> Quality instruments for all your
                technical needs.
              </li>
              <li>
                <strong>Civil Lab Equipment:</strong> Reliable gear for
                engineering labs.
              </li>
              <li>
                <strong>Indian Brass Handicrafts:</strong> Traditional brass art
                showcasing India's heritage.
              </li>
            </ul>
          </div>

          {/* Image Content */}
          <div className="grid grid-cols-2 gap-4">
            {imageData.map((item, index) => (
              <div key={index} className="relative group cursor-pointer">
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-auto aspect-square object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
