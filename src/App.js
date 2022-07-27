import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/AboutUs/AboutUs";
import OurServices from "./Components/OurServices/OurServices";
import Features from "./Components/Features/Features";
import Testimonials from "./Components/Testimonials/Testimonials";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route exact path="/About" element={<AboutUs />} />
        <Route path="/Services" element={<OurServices />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/Contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
