import React from "react";
import Navbar from "../components/global/Navbar.jsx";
import Footer from "../components/global/Footer.jsx";
import InstrumentsCategory from "../components/InstrumentsCategory/InstrumentsCategory.jsx";

const InstrumentsCategories = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <InstrumentsCategory/>
      <Footer />
    </div>
  );
};

export default InstrumentsCategories;
