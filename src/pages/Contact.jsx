import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
  Building2,
  CheckCircle,
} from "lucide-react";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

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
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="flex items-center gap-3 mb-8">
                  <Building2 className="w-8 h-8 text-sky-400" />
                  <h2 className="text-3xl font-bold text-gray-900">
                    Send Us a Message
                  </h2>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600">
                      Thank you for contacting us. We'll get back to you within
                      24 hours.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-300"
                            placeholder="Enter your full name"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-300"
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-300"
                            placeholder="Enter your phone number"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Subject *
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-300"
                        >
                          <option value="">Select a subject</option>
                          <option value="Product Inquiry">
                            Product Inquiry
                          </option>
                          <option value="Service Request">
                            Service Request
                          </option>
                          <option value="Technical Support">
                            Technical Support
                          </option>
                          <option value="Quote Request">Quote Request</option>
                          <option value="General Information">
                            General Information
                          </option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Message *
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows="6"
                          className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-300 resize-none"
                          placeholder="Tell us about your requirements or questions..."
                        ></textarea>
                      </div>
                    </div>

                    <button
                      onClick={handleSubmit}
                      className="w-full bg-gradient-to-r from-sky-400 to-sky-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-sky-500 hover:to-sky-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>
                  </div>
                )}
              </div>

              {/* Map & Additional Info */}
              <div className="space-y-8">
                {/* Map */}
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Find Us Here
                  </h3>
                  <div className="aspect-video rounded-2xl overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3462.5!2d77.8880!3d29.8644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDUxJzUxLjgiTiA3N8KwNTMnMTYuOCJF!5e0!3m2!1sen!2sin!4v1234567890"
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

                {/* Quick Contact Info */}
                <div className="bg-gradient-to-r from-sky-500 to-sky-600 rounded-3xl p-8 shadow-2xl text-white">
                  <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <p className="text-sky-100">
                          tajenterprises0101@gmail.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Phone</h4>
                        <p className="text-sky-100">+91 9897748786</p>
                        <p className="text-sky-100">+91 9410907725</p>
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
