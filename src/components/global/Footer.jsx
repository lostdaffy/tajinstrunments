import React from "react";

// Mock Link component for demo purposes
const Link = ({ to, children, className, ...props }) => (
  <a href={to} className={className} {...props}>
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-500/5 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block group">
              <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent group-hover:from-sky-300 group-hover:to-sky-500 transition-all duration-300">
                Taj Enterprises<span className="text-gray-400">.</span>
              </h2>
            </Link>

            <p className="mt-4 text-gray-300 leading-relaxed max-w-md">
              Welcome to Taj Enterprises, a trusted name in quality-driven
              solutions and equipment. Proudly serving a wide range of
              industries with commitment and innovation since 2015.
            </p>

            <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 bg-sky-500/10 border border-sky-500/20 rounded-full">
              <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-sky-300 font-medium">
                ISO 9001:2015 Certified
              </span>
            </div>

            {/* Social Media Links */}
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-3">Follow Us</p>
              <div className="flex gap-3">
                <Link
                  href="https://www.facebook.com/share/1H1pJDVFag/"
                  target="_blank"
                  className="group flex items-center justify-center w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-lg transition-all duration-300 hover:scale-110"
                  aria-label="Follow us on Facebook"
                >
                  <i className="ri-facebook-fill"></i>
                </Link>
                <Link
                  href="https://www.instagram.com/tajenterprises01?igsh=eGZkeDEwMjloazJ1"
                  target="_blank"
                  className="group flex items-center justify-center w-10 h-10 bg-gray-700 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 rounded-lg transition-all duration-300 hover:scale-110"
                  aria-label="Follow us on Instagram"
                >
                  <i className="ri-instagram-line"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick Links" className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { to: "/home", label: "Home" },
                { to: "/instruments", label: "Instruments" },
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact Us" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="group flex items-center text-gray-300 hover:text-sky-400 transition-all duration-200"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-sky-400 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">
              Get In Touch
            </h3>

            <div className="space-y-4 text-sm">
              {/* Address */}
              <div className="group">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5 text-sky-400">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-full h-full"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-white mb-1">Our Location</p>
                    <address className="not-italic text-gray-300 leading-relaxed">
                      H.NO-400B/4, Eidgah Enclave,
                      <br />
                      Near Rampur Chungi, Dehradun Road,
                      <br />
                      Roorkee, 247667, Uttarakhand, India
                    </address>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="group">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5 text-sky-400">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-full h-full"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-white mb-2">Email Us</p>
                    <div className="space-y-1">
                      <a
                        href="mailto:tajenterprises0101@gmail.com"
                        className="block text-gray-300 hover:text-sky-400 transition-colors duration-200"
                      >
                        tajenterprises0101@gmail.com
                      </a>
                      <a
                        href="mailto:info@tajinstruments.com"
                        className="block text-gray-300 hover:text-sky-400 transition-colors duration-200"
                      >
                        info@tajinstruments.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="group">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5 text-sky-400">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-full h-full"
                    >
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-white mb-2">Call Us</p>
                    <div className="space-y-1">
                      <Link
                        href="tel:+919897748786"
                        className="block text-gray-300 hover:text-sky-400 transition-colors duration-200"
                      >
                        +91 98977 48786
                      </Link>
                      <Link
                        href="tel:+919410907725"
                        className="block text-gray-300 hover:text-sky-400 transition-colors duration-200"
                      >
                        +91 94109 07725
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2015-{new Date().getFullYear()} All Rights Reserved —
              <Link
                to="/"
                className="text-sky-400 hover:text-sky-300 transition-colors duration-200 ml-1"
              >
                Taj Enterprises
              </Link>
            </p>

            <div className="flex items-center gap-4 text-xs text-gray-500">
              <Link
                to="/privacy"
                className="hover:text-gray-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <span>•</span>
              <Link
                to="/terms"
                className="hover:text-gray-400 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
