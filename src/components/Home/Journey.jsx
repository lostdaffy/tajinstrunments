import React from "react";

const Journey = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Journey Section */}
      <div className="bg-white py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Our Journey
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                A timeline of growth, innovation, and excellence
              </p>
            </div>

            <div className="relative pl-10 sm:pl-12">
              {/* Vertical timeline line */}
              <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

              <div className="space-y-10 sm:space-y-12">
                {[
                  {
                    year: "2008",
                    title: "Company Founded",
                    desc: "Started with a passion for precision surveying and a commitment to excellence",
                  },
                  {
                    year: "2012",
                    title: "Service Expansion",
                    desc: "Added architectural drafting services to complement our surveying expertise",
                  },
                  {
                    year: "2018",
                    title: "Digital Revolution",
                    desc: "Adopted cutting-edge digital tools, CAD software, and drone technology",
                  },
                  {
                    year: "2023",
                    title: "Major Milestone",
                    desc: "Completed over 500 successful projects across residential and commercial sectors",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="relative flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 group"
                  >
                    {/* Year badge */}
                    <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm sm:text-base font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {item.year.slice(-2)}
                    </div>

                    {/* Content box */}
                    <div className="flex-1 bg-gray-50 rounded-xl p-4 sm:p-6 group-hover:bg-blue-50 transition-colors duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 mb-2">
                        <span className="text-lg sm:text-2xl font-bold text-blue-600">
                          {item.year}
                        </span>
                        <span className="text-base sm:text-xl font-semibold text-gray-900">
                          {item.title}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
