import React, { useState } from "react";
import Modal from "../global/Modal";
import { Link } from "react-router-dom";
import { products } from "./productsData";

const imageMap = {
  scale: "/images/scale.webp",
  compass: "/images/compass.webp",
  protractor: "/images/protractor.webp",
  drawing_set: "/images/drawing_set.webp",
  t_square: "/images/t_square.webp",
  measuring_tape: "/images/measuring_tape.webp",
  tripod: "/images/tripod.webp",
  plumb_bob: "/images/plumb_bob.webp",
  steel_tape: "/images/steel_tape.webp",
};



const Instrument = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Drawing");
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { title: "Survey" },
    { title: "Drawing" },
    { title: "Civil Lab" },
    { title: "Indian Brass Handicrafts" },
  ];

  const handleClick = (category) => {
    setSelectedCategory(category);
    setIsCategoryMenuOpen(false);
    setCurrentPage(1);
  };

  const filteredProducts = products.filter(
    (item) =>
      item.category === selectedCategory &&
      (item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="bg-gray-50 w-full min-h-screen px-2 sm:px-4 py-6 sm:py-10">
        <div className="mx-auto max-w-7xl">
          {/* Mobile Category Toggle */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setIsCategoryMenuOpen(!isCategoryMenuOpen)}
              className="w-full bg-white p-4 rounded-lg shadow-md flex items-center justify-between text-gray-800 font-semibold"
            >
              <span>Categories</span>
              <i
                className={`ri-arrow-${isCategoryMenuOpen ? "up" : "down"}-s-line text-lg`}
              ></i>
            </button>
            {isCategoryMenuOpen && (
              <div className="mt-2 bg-white rounded-lg shadow-md p-4">
                <ul className="space-y-3">
                  {categories.map((item, index) => (
                    <li
                      onClick={() => handleClick(item.title)}
                      key={index}
                      className={`py-3 px-4 cursor-pointer rounded-lg transition-colors ${
                        selectedCategory === item.title
                          ? "bg-blue-100 text-blue-600 font-semibold"
                          : "hover:bg-gray-100 hover:text-blue-600"
                      }`}
                    >
                      → {item.title} Instruments
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
            {/* Sidebar */}
            <div className="hidden lg:block w-80 space-y-5 sticky top-10 self-start">
              <div className="bg-gray-200 p-6 rounded">
                <h1 className="text-2xl font-bold text-gray-800 leading-tight">
                  Categories
                </h1>
              </div>
              <div className="bg-gray-200 p-6 rounded">
                <h3 className="text-base font-bold text-gray-700 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((item, index) => (
                    <li
                      onClick={() => handleClick(item.title)}
                      key={index}
                      className={`py-2 cursor-pointer transition-colors ${
                        selectedCategory === item.title
                          ? "text-blue-600 font-semibold"
                          : "hover:text-blue-600"
                      }`}
                    >
                      → {item.title} Instruments
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <h1 className="text-lg sm:text-2xl font-bold text-gray-800">
                  {filteredProducts.length} styles found for {selectedCategory}
                </h1>
              </div>

              {/* Search Input */}
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>

              {/* Product Grid */}
              <div className="space-y-4 sm:space-y-6">
                {currentProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-xl border border-gray-300 p-3 sm:p-4 lg:p-6"
                  >
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
                      <div className="flex-shrink-0 mx-auto sm:mx-0 shadow-2xl">
                        <img
                          src={imageMap[product.image]}
                          alt={product.title}
                          className="w-32 h-32 sm:w-40 sm:h-40 lg:w-50 lg:h-50 object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1 text-center sm:text-left px-5">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                          {product.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                          {product.description}
                        </p>
                      </div>
                      <div className="flex flex-col sm:items-end justify-center sm:justify-between space-y-3 sm:py-2 lg:py-5">
                        <div className="flex flex-col w-full sm:w-auto space-y-2">
                          <Link
                            onClick={() => setIsModalOpen(true)}
                            className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold px-4 sm:px-6 py-2 rounded-xl text-center transition-colors"
                          >
                            <i className="ri-phone-fill mr-1"></i> Buy now
                          </Link>
                          <Link
                            to="/contact"
                            className="text-black font-semibold px-4 sm:px-6 py-2 rounded-xl border border-black hover:bg-gray-50 text-center transition-colors"
                          >
                            <i className="ri-mail-fill mr-1"></i> Send Inquiry
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-6 sm:mt-8">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`px-3 py-2 rounded text-sm font-medium ${
                        currentPage === 1
                          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                          : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <i className="ri-arrow-left-s-line"></i>
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => (
                      <button
                        key={i + 1}
                        onClick={() => handlePageChange(i + 1)}
                        className={`w-8 h-8 rounded text-sm font-medium ${
                          currentPage === i + 1
                            ? "bg-blue-600 text-white"
                            : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`px-3 py-2 rounded text-sm font-medium ${
                        currentPage === totalPages
                          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                          : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <i className="ri-arrow-right-s-line"></i>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Contact Information"
      >
        <div className="space-y-4 text-sm text-gray-700">
          <div>
            <strong className="block mb-1">Address:</strong>
            H.NO-400B/4, Eidgah Enclave, Near Rampur Chungi, Dehradun Road,
            Roorkee, 247667, Uttarakhand, India
          </div>
          <div>
            <strong className="block mb-1">Email:</strong>
            <a
              href="mailto:tajenterprises0101@gmail.com"
              className="text-blue-600 hover:underline"
            >
              tajenterprises0101@gmail.com
            </a>
          </div>
          <div>
            <strong className="block mb-1">Mobile No.:</strong>
            <a href="tel:+919897748786" className="text-blue-600 hover:underline">
              +91 9897748786
            </a>
            ,{" "}
            <a href="tel:+919410907725" className="text-blue-600 hover:underline">
              +91 9410907725
            </a>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Instrument;
