import React from "react";
import Navbar from "../components/global/Navbar.jsx";
import Footer from "../components/global/Footer.jsx";
import Instrument from "../components/Instrument/Instrument.jsx";

const Instruments = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Instrument />
      <Footer />
    </div>
  );
};

export default Instruments;
