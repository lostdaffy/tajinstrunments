import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="w-full font-sans text-gray-100 text-xs sm:text-sm md:text-base">
      {/* Top Bar */}
      <div className="bg-slate-900 px-4 sm:px-8 md:px-20 py-2 text-xs sm:text-sm md:text-base">
        <ul className="flex flex-col gap-1 md:flex-row md:justify-between list-none text-gray-300">
          <li>Open Hours: 08:00-18:00 | Mon-Sat</li>
          <li>satyaasingh001@gmail.com</li>
          <li className="tracking-widest flex items-center gap-1">
            <span>CALL US:</span>{" "}
            <i className="ri-phone-fill" aria-hidden="true"></i> +91 8273998875
          </li>
        </ul>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 px-4 sm:px-8 md:px-20 py-4 relative z-50">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-3xl font-extrabold text-sky-500">
            Taj Ins.<span className="text-gray-400">.</span>
          </Link>

          {/* Hamburger Button - visible only below md */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-gray-800 md:hidden focus:outline-none"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <i className={`ri-${menuOpen ? "close-line" : "menu-line"}`}></i>
          </button>

          {/* Desktop Nav Links - visible md and up */}
          <div className="hidden md:flex items-center gap-8 font-semibold text-sm md:text-base tracking-wider text-gray-800">
            <Link
              to="/home"
              className="hover:text-slate-900 text-slate-500 px-3 py-2 rounded-md transition-colors"
            >
              Home
            </Link>

            {/* Instruments as simple link */}
            <Link
              to="/instruments-categories"
              className="hover:text-slate-900 px-3 py-2 rounded-md transition-colors"
            >
              Instruments
            </Link>

            <Link
              to="/about"
              className="hover:text-slate-900 px-3 py-2 rounded-md transition-colors"
            >
              About us
            </Link>
            {/* <Link
              to="/gallery"
              className="hover:text-slate-900 px-3 py-2 rounded-md transition-colors"
            >
              Gallery
            </Link> */}
            <Link
              to="/contact"
              className="hover:text-slate-900 px-3 py-2 rounded-md transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Desktop Social Icons - visible md and up */}
          <ul className="hidden md:flex gap-4 list-none text-2xl">
            <li>
              <Link to="#" className="text-violet-600" aria-label="Facebook">
                <i className="ri-facebook-fill" aria-hidden="true"></i>
              </Link>
            </li>
            <li>
              <Link to="#" className="text-pink-600" aria-label="Instagram">
                <i className="ri-instagram-line" aria-hidden="true"></i>
              </Link>
            </li>
            <li>
              <Link to="#" className="text-fuchsia-600" aria-label="Twitter">
                <i className="ri-twitter-x-fill" aria-hidden="true"></i>
              </Link>
            </li>
            <li>
              <Link to="#" className="text-indigo-600" aria-label="LinkedIn">
                <i className="ri-linkedin-fill" aria-hidden="true"></i>
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile menu backdrop overlay */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-40"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          ></div>
        )}

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-md transition-transform duration-300 ease-in-out transform ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          } z-50`}
        >
          <nav
            role="menu"
            className="flex flex-col gap-4 p-6 text-gray-800 font-semibold tracking-wider text-sm"
          >
            <Link
              role="menuitem"
              to="/home"
              onClick={() => setMenuOpen(false)}
              className="hover:text-slate-900 px-3 py-2 rounded-md transition-colors"
            >
              Home
            </Link>
            <Link
              role="menuitem"
              to="/instruments"
              onClick={() => setMenuOpen(false)}
              className="hover:text-slate-900 px-3 py-2 rounded-md transition-colors"
            >
              Instruments
            </Link>
            <Link
              role="menuitem"
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-slate-900 px-3 py-2 rounded-md transition-colors"
            >
              About
            </Link>
            {/* <Link
              role="menuitem"
              to="/gallery"
              onClick={() => setMenuOpen(false)}
              className="hover:text-slate-900 px-3 py-2 rounded-md transition-colors"
            >
              Gallery
            </Link> */}
            <Link
              role="menuitem"
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-slate-900 px-3 py-2 rounded-md transition-colors"
            >
              Contact Us
            </Link>

            <div className="flex gap-6 mt-4 text-2xl">
              <Link to="#" className="text-violet-600" aria-label="Facebook">
                <i className="ri-facebook-fill" aria-hidden="true"></i>
              </Link>
              <Link to="#" className="text-pink-600" aria-label="Instagram">
                <i className="ri-instagram-line" aria-hidden="true"></i>
              </Link>
              <Link to="#" className="text-fuchsia-600" aria-label="Twitter">
                <i className="ri-twitter-x-fill" aria-hidden="true"></i>
              </Link>
              <Link to="#" className="text-indigo-600" aria-label="LinkedIn">
                <i className="ri-linkedin-fill" aria-hidden="true"></i>
              </Link>
            </div>
          </nav>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
