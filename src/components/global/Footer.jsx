import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white bg-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <Link to="/" className="text-3xl font-extrabold text-sky-500">
            Taj Ins.<span className="text-gray-400">.</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-gray-300">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>

        {/* Quick Links 1 */}
        <nav aria-label="Quick Links">
          <h3 className="text-lg font-semibold mb-4 text-gray-200">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link to="/" className="hover:text-sky-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/achievement" className="hover:text-sky-500 transition">
                Achievement
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-sky-500 transition">
                Our Gallery
              </Link>
            </li>
            <li>
              <Link to="/alumni" className="hover:text-sky-500 transition">
                Alumni
              </Link>
            </li>
          </ul>
        </nav>

        {/* Quick Links 2 */}
        <nav aria-label="More Links">
          <h3 className="text-lg font-semibold mb-4 text-gray-200">More Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link to="/about" className="hover:text-sky-500 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-sky-500 transition">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/policies" className="hover:text-sky-500 transition">
                Our Policies
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-sky-500 transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-200">Contact Us</h3>
          <address className="not-italic text-sm leading-relaxed text-gray-300">
            Roorkee, <br />
            Uttarakhand, India
          </address>
          <div className="mt-4">
            <Link
              to="/contact"
              className="inline-flex items-center bg-sky-500 hover:bg-sky-600 text-white py-2 px-4 rounded-md transition"
            >
              <i className="ri-phone-fill mr-2" aria-hidden="true"></i>
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-900 text-gray-400 text-center py-4">
        <p className="text-sm">
          &copy; 2025 All Rights Reserved —{" "}
          <Link to="/" className="text-sky-400 hover:underline">
            Taj Ins..
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
