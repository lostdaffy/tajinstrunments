import React from "react";
import { Phone, Mail, MapPin, Clock, Building2 } from "lucide-react";
import ContactForm from "../components/global/ContactForm";
import Footer from "../components/global/Footer";
import Navbar from "../components/global/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-sky-100">
        {/* Hero Section */}
        <div className="relative py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-sky-600/10 to-sky-400/15"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Phone className="w-10 h-10 text-sky-400" />
              <span className="bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent font-semibold text-lg tracking-wider uppercase">
                Get In Touch
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Contact
              <span className="bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent">
                {" "}
                M/S Taj Enterprises
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your precision instrument needs? We're here to
              help with expert guidance, quality products, and exceptional
              service.
            </p>
          </div>
        </div>

        {/* Contact Information Cards */}
        <div className="py-16 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {/* Email Card */}
              <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/40 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Email Us
                </h3>
                <a
                  href="mailto:tajenterprises0101@gmail.com"
                  className="text-sky-400 hover:text-sky-600 font-medium break-all transition-colors"
                >
                  tajenterprises0101@gmail.com
                </a>
                <br />
                <a
                  href="mailto:info@tajinstruments.com"
                  className="text-sky-400 hover:text-sky-600 font-medium break-all transition-colors"
                >
                  info@tajinstruments.com
                </a>
              </div>

              {/* Phone Card */}
              <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/40 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Call Us
                </h3>
                <div className="space-y-2">
                  <a
                    href="tel:+919897748786"
                    className="block text-sky-400 hover:text-sky-600 font-medium transition-colors"
                  >
                    +91 9897748786
                  </a>
                  <a
                    href="tel:+919410907725"
                    className="block text-sky-400 hover:text-sky-600 font-medium transition-colors"
                  >
                    +91 9410907725
                  </a>
                </div>
              </div>

              {/* Address Card */}
              <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/40 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Visit Us
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  H.NO-400B/4, Eidgah Enclave, Near Rampur Chungi, Dehradun
                  Road, Roorkee, 247667, Uttarakhand, India
                </p>
              </div>

              {/* Business Hours Card */}
              <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/40 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Business Hours
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Saturday</p>
                  <p className="font-semibold text-sky-400">
                    9:00 AM - 6:00 PM
                  </p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form & Map Section */}
        <div className="bg-white/60 backdrop-blur-sm py-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
             
              {/* Contact Form */}

              <ContactForm />

              {/* Map & Quick Info */}
              <div className="space-y-8">
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Find Us Here
                  </h3>
                  <div className="aspect-video rounded-2xl overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3459.4206130057305!2d77.87702887554752!3d29.880978775006305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDUyJzUxLjUiTiA3N8KwNTInNDYuNiJF!5e0!3m2!1sen!2sin!4v1748420861496!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="M/S Taj Enterprises Location"
                    ></iframe>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-sky-500 to-sky-600 rounded-3xl p-8 shadow-2xl text-white">
                  <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <a
                          href="mailto:tajenterprises0101@gmail.com"
                          className="hover:underline"
                        >
                          tajenterprises0101@gmail.com
                        </a>
                        <br />
                        <a
                          href="mailto:info@tajinstruments.com"
                          className="hover:underline"
                        >
                          info@tajinstruments.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Phone</h4>
                        <a href="tel:+919897748786" className="hover:underline">
                          +91 9897748786
                        </a>
                        <br />
                        <a href="tel:+919410907725" className="hover:underline">
                          +91 9410907725
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Address</h4>
                        <p className="text-sky-100 leading-relaxed">
                          H.NO-400B/4, Eidgah Enclave, Near Rampur Chungi,
                          Dehradun Road, Roorkee, 247667, Uttarakhand, India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="py-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Whether you need precision instruments, technical support, or
              custom solutions, M/S Taj Enterprises is here to serve you with
              excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919897748786"
                className="bg-gradient-to-r from-sky-400 to-sky-600 text-white font-semibold px-8 py-4 rounded-2xl hover:from-sky-500 hover:to-sky-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Call Now
              </a>
              <a
                href="mailto:tajenterprises0101@gmail.com"
                className="border-2 border-sky-400 text-sky-400 font-semibold px-8 py-4 rounded-2xl hover:bg-sky-400 hover:text-white transition-all duration-300"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
