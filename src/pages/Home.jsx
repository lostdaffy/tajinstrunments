import React from "react";
import Hero from "../components/Home/Hero.jsx";
import About from "../components/Home/About";
import Contact from "../components/Home/Contact";
import Navbar from "../components/global/Navbar.jsx";
import Footer from "../components/global/Footer.jsx";
import Journey from "../components/Home/Journey.jsx";
import TopCategory from "../components/Home/TopCategory.jsx";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TopCategory />
      <About />
      <Journey />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
