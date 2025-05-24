import React from "react";

const Contact = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl p-6 sm:p-10 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            Have a question or want to work together? Fill out the form and we’ll get back to you as soon as possible.
          </p>
          <div className="space-y-4 text-gray-700 text-sm sm:text-base">
            <p>
              <strong>Email:</strong> yourname@example.com
            </p>
            <p>
              <strong>Phone:</strong> +123 456 7890
            </p>
            <p>
              <strong>Location:</strong> City, Country
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="w-full mt-1 px-4 py-3 rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full mt-1 px-4 py-3 rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows="4"
              className="w-full mt-1 px-4 py-3 rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="Your message..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 bg-sky-400 hover:bg-sky-500 text-white rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
