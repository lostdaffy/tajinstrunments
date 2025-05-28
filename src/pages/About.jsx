import React from "react";
import {
  Award,
  Users,
  Target,
  CheckCircle,
  Calendar,
  Building2,
} from "lucide-react";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {/* Hero Section */}
        <div className="relative py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-600/5 to-sky-400/10"></div>
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Image Section */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-gray-400 to-sky-400 rounded-3xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-white/20 backdrop-blur-sm">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80"
                  alt="About M/S Taj Enterprises - Precision Instruments"
                  className="rounded-2xl w-full h-80 object-cover shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-2">
                    <Award className="w-6 h-6" />
                    <div>
                      <div className="font-bold text-sm">ISO 9001:2015</div>
                      <div className="text-xs opacity-90">Certified</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Section */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-8 h-8 text-gray-600" />
                  <span className="text-gray-600 font-semibold text-sm tracking-wider uppercase">
                    About Our Company
                  </span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  M/S Taj
                  <span className="text-sky-400"> Enterprises</span>
                </h1>
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-5 h-5 text-gray-500" />
                  <p className="text-xl text-gray-700">
                    Established on{" "}
                    <span className="font-bold text-gray-800">
                      27th December 2007
                    </span>
                  </p>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  A trusted leader in manufacturing, supply, and servicing of
                  precision instruments and equipment. We are an{" "}
                  <span className="font-semibold text-gray-800">
                    ISO 9001:2015 certified company
                  </span>{" "}
                  dedicated to quality and customer satisfaction.
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white backdrop-blur-sm p-6 rounded-2xl border border-gray-200 shadow-lg">
                  <div className="text-3xl font-bold text-gray-700 mb-1">
                    15+
                  </div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="bg-white backdrop-blur-sm p-6 rounded-2xl border border-gray-200 shadow-lg">
                  <div className="text-3xl font-bold text-sky-400 mb-1">9</div>
                  <div className="text-sm text-gray-600">
                    Product Categories
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products & Services Section */}
        <div className="bg-white py-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                What We Specialize In
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From precision survey instruments to advanced laboratory
                equipment, we provide comprehensive solutions for professionals
                across various industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Survey Instruments",
                "Engineering Instruments",
                "Laboratory Instruments",
                "Drawing Instruments",
                "Mathematical & Scientific Equipment",
                "Hydrological Instruments",
                "Soil Testing Equipment",
                "Electronic & Electrical Items",
                "Custom Display Boards",
              ].map((item, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-md border border-gray-200 hover:shadow-lg hover:border-sky-300 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-sky-400 group-hover:scale-110 transition-all duration-300">
                      <CheckCircle className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-sky-400 transition-colors">
                      {item}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="py-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose M/S Taj Enterprises?
              </h2>
              <p className="text-xl text-gray-600">
                Excellence backed by certification, experience, and unwavering
                commitment to quality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: "ISO 9001:2015 Certified",
                  description:
                    "Quality standards that meet international benchmarks",
                },
                {
                  icon: Calendar,
                  title: "15+ Years Experience",
                  description:
                    "Deep industry knowledge and proven track record",
                },
                {
                  icon: Building2,
                  title: "Wide Product Range",
                  description:
                    "Comprehensive solutions for all your instrument needs",
                },
                {
                  icon: Users,
                  title: "Custom Services",
                  description: "Tailored repair & maintenance solutions",
                },
                {
                  icon: Target,
                  title: "Trusted Partnership",
                  description:
                    "Relied upon by engineers, scientists & educators",
                },
                {
                  icon: CheckCircle,
                  title: "Quality Assurance",
                  description: "Rigorous testing and quality control processes",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sky-400 group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vision & Mission Section */}
        <div className="relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-50 to-white"></div>
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                'url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')',
            }}
          ></div>

          <div className="relative max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-gray-800 mb-6">
                Our <span className="text-sky-400">Purpose</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Driven by innovation and excellence, we shape the future of
                scientific instrumentation
              </p>
            </div>

            {/* Vision & Mission Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              {/* Vision Card */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-sky-400 rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-500"></div>
                <div className="relative bg-white rounded-3xl p-10 border border-gray-200 hover:border-sky-300 transition-all duration-500 shadow-lg">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-sky-400 rounded-2xl flex items-center justify-center">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800">
                      Our Vision
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To become a leading global brand in scientific and technical
                    instrumentation by delivering innovative, reliable, and
                    affordable solutions that empower progress across
                    industries.
                  </p>
                  <div className="mt-8 flex items-center text-sky-400 font-semibold">
                    <span className="mr-2">Global Leadership</span>
                    <div className="w-12 h-0.5 bg-sky-400"></div>
                  </div>
                </div>
              </div>

              {/* Mission Card */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-sky-400 rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-500"></div>
                <div className="relative bg-white rounded-3xl p-10 border border-gray-200 hover:border-sky-300 transition-all duration-500 shadow-lg">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-sky-400 rounded-2xl flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800">
                      Our Mission
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To support scientific discovery, technical education, and
                    field operations by providing high-quality instruments and
                    responsive customer service that exceeds expectations.
                  </p>
                  <div className="mt-8 flex items-center text-sky-400 font-semibold">
                    <span className="mr-2">Customer Excellence</span>
                    <div className="w-12 h-0.5 bg-sky-400"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Values Section */}
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-gray-800 mb-12">
                Our Core Values
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-sky-300 transition-all duration-300 shadow-md">
                  <div className="w-12 h-12 bg-sky-400 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">
                    Excellence
                  </h4>
                  <p className="text-gray-600">
                    Uncompromising quality in every product and service we
                    deliver
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-sky-300 transition-all duration-300 shadow-md">
                  <div className="w-12 h-12 bg-sky-400 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">
                    Innovation
                  </h4>
                  <p className="text-gray-600">
                    Continuously pushing boundaries to develop cutting-edge
                    solutions
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-sky-300 transition-all duration-300 shadow-md">
                  <div className="w-12 h-12 bg-sky-400 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">
                    Integrity
                  </h4>
                  <p className="text-gray-600">
                    Building trust through transparency and ethical business
                    practices
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Call to Action */}
            <div className="relative">
              <div className="absolute inset-0 bg-sky-400/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-white rounded-3xl p-12 border border-gray-200 text-center shadow-lg">
                <h3 className="text-4xl font-bold text-gray-800 mb-6">
                  Ready to Experience Excellence?
                </h3>
                <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                  Join thousands of satisfied customers who trust M/S Taj
                  Enterprises for their precision instrument needs. Experience
                  the difference that quality and dedication make.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button className="group relative bg-sky-400 text-white font-bold px-10 py-5 rounded-2xl hover:bg-sky-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    <span className="relative z-10">Contact Us Today</span>
                  </button>
                  <button className="group relative border-2 border-sky-400 text-sky-400 font-bold px-10 py-5 rounded-2xl hover:bg-sky-400 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                    <span className="relative z-10">View Our Products</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
