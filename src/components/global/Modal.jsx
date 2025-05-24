import React, { useState } from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4 animate-fade-in">
      {/* Modal container with entrance animation */}
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative transform transition-all duration-300 ease-out animate-modal-enter">
        {/* Close button with hover animation */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 text-gray-400 hover:text-red-500 transition-all duration-200 text-3xl font-bold hover:rotate-90 hover:scale-110"
        >
          &times;
        </button>

        {/* Title with slide-in animation */}
        {title && (
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 animate-slide-down">
            {title}
          </h2>
        )}

        {/* Modal content with fade-in delay */}
        <div className="mb-8 text-gray-700 text-base animate-fade-in-delay">
          {children}
        </div>

        {/* Contact Us Section with staggered animations */}
        <div className="border-t border-gray-200 pt-6 animate-slide-up">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Contact Us
          </h3>
          <ul className="space-y-4 text-gray-600 text-lg">
            <li className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-200 animate-slide-in-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500 hover:scale-110 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a
                href="mailto:support@example.com"
                className="hover:text-blue-600 transition-colors duration-200 hover:underline"
              >
                support@example.com
              </a>
            </li>
            <li className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-200 animate-slide-in-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-500 hover:scale-110 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <a
                href="tel:+1234567890"
                className="hover:text-green-600 transition-colors duration-200 hover:underline"
              >
                +1 (234) 567-890
              </a>
            </li>
            <li className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-200 animate-slide-in-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-500 hover:scale-110 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 12.414a2 2 0 000-2.828l4.243-4.243a2 2 0 000-2.828L15.828 6.172a2 2 0 00-2.828 0l-4.243 4.243a2 2 0 00-2.828 0L1.172 15.172a2 2 0 000 2.828L3 19.828a2 2 0 002.828 0l4.243-4.243a2 2 0 002.828 0l4.243 4.243a2 2 0 002.828 0l1.828-1.828a2 2 0 000-2.829z"
                />
              </svg>
              <span>123 Main Street, City, Country</span>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes modal-enter {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-modal-enter {
          animation: modal-enter 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .animate-slide-down {
          animation: slide-down 0.5s ease-out 0.1s both;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.6s ease-out 0.2s both;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out 0.3s both;
        }

        .animate-slide-in-1 {
          animation: slide-in-left 0.5s ease-out 0.4s both;
        }

        .animate-slide-in-2 {
          animation: slide-in-left 0.5s ease-out 0.5s both;
        }

        .animate-slide-in-3 {
          animation: slide-in-left 0.5s ease-out 0.6s both;
        }
      `}</style>
    </div>
  );
};

export default Modal;
