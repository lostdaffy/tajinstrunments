import React, { useState } from "react";
import Modal from "../global/Modal";
import { Link } from "react-router-dom";
import { drawing, survey, civil, indianBrass } from "./productsData";
import scale from "../../assets/scale.webp";
import compass from "../../assets/compass.webp";
import protractor from "../../assets/protractor.webp";

const imageMap = {
  scale,
  compass,
  protractor,
};

const Instrument = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Drawing");
  const [productData, setProductData] = useState(drawing); // default category

  const categories = [
    { title: "Survey" },
    { title: "Drawing" },
    { title: "Civil Lab" },
    { title: "Indian Brass Handicrafts" },
  ];

  const handleClick = (category) => {
    setSelectedCategory(category);
    switch (category) {
      case "Survey":
        setProductData(survey);
        break;
      case "Drawing":
        setProductData(drawing);
        break;
      case "Civil Lab":
        setProductData(civil);
        break;
      case "Indian Brass Handicrafts":
        setProductData(indianBrass);
        break;
      default:
        setProductData([]);
    }
  };

  return (
    <>
      <div className="bg-gray-50 w-full min-h-screen px-4 py-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex gap-10 mb-8">
            <div className="w-85 space-y-5 sticky top-10 self-start">
              <div className="bg-gray-200 p-6 rounded">
                <h1 className="text-2xl font-bold text-gray-800 leading-tight">
                  Categories
                </h1>
              </div>
              <div className="bg-gray-200 p-6 rounded">
                <h3 className="text-base font-bold text-gray-700 mb-4">
                  Categories
                </h3>
                <ul className="space-y-2">
                  {categories.map((item, index) => (
                    <li
                      onClick={() => handleClick(item.title)}
                      key={index}
                      className="py-2 cursor-pointer hover:text-blue-600"
                    >
                      → {item.title} Instruments
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-bold text-gray-800">
                  {productData.length} styles found for {selectedCategory}
                </h1>
              </div>

              {/* Product Grid */}
              <div className="space-y-6">
                {productData.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-xl border border-gray-300 p-2"
                  >
                    <div className="flex space-x-6">
                      <div className="flex-shrink-0">
                        <img
                          src={imageMap[product.image]} // ✅ Map string name to actual image import
                          alt={product.title}
                          className="w-50 h-50 object-cover rounded-lg"
                        />
                      </div>

                      <div className="flex-1 py-5">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {product.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                          {product.description}
                        </p>
                      </div>

                      <div className="flex flex-col items-end justify-between py-5">
                        <div className="flex flex-col space-y-2">
                          <Link
                            onClick={() => setIsModalOpen(true)}
                            className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold px-6 py-2 rounded-xl"
                          >
                            <i className="ri-phone-fill"></i> Buy now
                          </Link>
                          <Link
                            to="/contact"
                            className="text-black font-semibold px-6 py-2 rounded-xl border border-black hover:bg-white/20"
                          >
                            <i className="ri-mail-fill"></i> Send Inquiry
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination (static for now) */}
              <div className="flex justify-center mt-8">
                <div className="flex items-center space-x-2">
                  <button className="w-8 h-8 bg-blue-600 text-white rounded text-sm font-medium">
                    1
                  </button>
                  <button className="w-8 h-8 border border-gray-300 text-gray-700 rounded text-sm">
                    2
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Welcome to Our Service"
      >
        <p className="mb-4">
          Thank you for your interest in our service. We're here to help you
          with any questions or concerns you may have.
        </p>
      </Modal>
    </>
  );
};

export default Instrument;
