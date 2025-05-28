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
