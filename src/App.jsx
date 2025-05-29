import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import InstrumentsCategories from "./pages/InstrumentsCategories.jsx";
import Instruments from "./pages/Instruments.jsx";
import About from "./pages/About.jsx";
import Payment from "./pages/payment.jsx";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/instruments-categories"
        element={<InstrumentsCategories />}
      />
      <Route path="/instruments" element={<Instruments />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
}

export default App;
