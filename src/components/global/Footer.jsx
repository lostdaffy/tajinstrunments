import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <Link to="/" className="text-3xl font-extrabold text-sky-500">
            Taj Enterprises<span className="text-gray-400">.</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-gray-300">
            Welcome to Taj Enterprises, a trusted name in quality-driven
            solutions and equipment. Proudly serving a wide range of industries
            with commitment and innovation since 2015.
          </p>
          <p className="mt-2 text-sm text-gray-400 italic">
            It is an ISO 9001:2015 certified company.
          </p>

          <ul className="flex gap-4 text-2xl pt-5 flex-wrap">
            <li>
              <Link
                to="#"
                className="text-gray-300 hover:text-blue-500 transition"
                aria-label="Facebook"
              >
                <i className="ri-facebook-fill" aria-hidden="true"></i>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-gray-300 hover:text-pink-500 transition"
                aria-label="Instagram"
              >
                <i className="ri-instagram-line" aria-hidden="true"></i>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-gray-300 hover:text-sky-400 transition"
                aria-label="Twitter"
              >
                <i className="ri-twitter-x-fill" aria-hidden="true"></i>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-gray-300 hover:text-blue-400 transition"
                aria-label="LinkedIn"
              >
                <i className="ri-linkedin-fill" aria-hidden="true"></i>
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <nav aria-label="Quick Links">
          <h3 className="text-lg font-semibold mb-4 text-gray-200">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link to="/" className="hover:text-sky-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/achievement" className="hover:text-sky-500 transition">
                Instruments
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-sky-500 transition">
                Our Gallery
              </Link>
            </li>
          </ul>
        </nav>

        {/* More Links */}
        <nav aria-label="More Links">
          <h3 className="text-lg font-semibold mb-4 text-gray-200">
            More Links
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
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
          <h3 className="text-lg font-semibold mb-4 text-gray-200">
            Contact Info
          </h3>
          <address className="not-italic text-sm leading-relaxed text-gray-300 space-y-4">
            <div>
              <strong className="block">
                <i className="ri-map-pin-line"></i> Address:
              </strong>
              H.NO-400B/4, Eidgah Enclave, Near Rampur Chungi, Dehradun Road,
              <br />
              Roorkee, 247667, Uttarakhand, India.
            </div>
            <div>
              <strong>
                <i className="ri-mail-line"></i> Email:
              </strong>
              <br />
              <a
                href="mailto:tajenterprises0101@gmail.com"
                className="hover:underline"
              >
                tajenterprises0101@gmail.com
              </a>
              <br />
              <a
                href="mailto:tajenterprises0101@gmail.com"
                className="hover:underline"
              >
                info@tajinstrunments.com
              </a>
            </div>
            <div>
              <strong>
                <i className="ri-phone-fill"></i> Mobile No.:
              </strong>
              <br />
              <a href="tel:+919897748786" className="hover:underline">
                +91 9897748786
              </a>
              <br />
              <a href="tel:+919410907725" className="hover:underline">
                +91 9410907725
              </a>
            </div>
          </address>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-900 text-gray-400 text-center py-4 px-4 sm:px-6 lg:px-8">
        <p className="text-sm">
          &copy; 2015 All Rights Reserved —{" "}
          <Link to="/" className="text-sky-400 hover:underline">
            Taj Enterprises.
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
