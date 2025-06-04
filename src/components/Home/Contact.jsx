import React, { useState } from "react";
import ContactForm from "../global/ContactForm";



const Contact = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 sm:py-12">
      <div className="w-full max-w-7xl bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 shadow-xl">
        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-6 sm:space-y-8">
          <div className="space-y-3 sm:space-y-4">
            <div className="inline-block">
              <span className="text-sky-400 text-xs sm:text-sm font-semibold tracking-wider uppercase">
                Contact Us
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Let's Start a Conversation
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Ready to bring your ideas to life? We're here to help you every
              step of the way. Reach out and let's create something amazing
              together.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-4 sm:space-y-6">
            {/* Email */}
            <div className="flex items-start space-x-3 sm:space-x-4 group">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-sky-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">
                  Email
                </h3>
                <p className="text-gray-600 hover:text-sky-400 transition-colors cursor-pointer text-sm sm:text-base break-all">
                  tajenterprises0101@gmail.com
                </p>
                <p className="text-gray-600 hover:text-sky-400 transition-colors cursor-pointer text-sm sm:text-base break-all">
                  info@tajinstrunments.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-3 sm:space-x-4 group">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-sky-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">
                  Phone
                </h3>
                <div className="space-y-1">
                  <p className="text-gray-600 hover:text-sky-400 transition-colors cursor-pointer text-sm sm:text-base">
                    +91 9897748786
                  </p>
                  <p className="text-gray-600 hover:text-sky-400 transition-colors cursor-pointer text-sm sm:text-base">
                    +91 9410907725
                  </p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start space-x-3 sm:space-x-4 group">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-sky-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">
                  Address
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  H.NO-400B/4, Eidgah Enclave,
                  <br />
                  Near Rampur Chungi, Dehradun Road,
                  <br />
                  Roorkee, 247667, Uttarakhand, India
                </p>
              </div>
            </div>
          </div>

          {/* Social proof or additional info */}
          <div className="pt-4 sm:pt-6 border-t border-gray-200">
            <p className="text-xs sm:text-sm text-gray-500 flex items-center">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400 mr-2 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              We typically respond within 24 hours
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="order-first lg:order-last">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
