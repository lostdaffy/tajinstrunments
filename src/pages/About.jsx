import React from "react";
import AboutPage from "../components/Home/About.jsx";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AboutPage />
      <Footer />
    </div>
  );
};

export default About;
