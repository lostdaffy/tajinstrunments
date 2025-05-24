import React from "react";
import ContactForm from "../components/Home/Contact";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
