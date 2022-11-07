import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./stories/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom"; //like a parent component - need to be wrapped
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Players from "./components/Players";

//exact path: follow the exact match of the written /page
const RoutesData = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Players" element={<Players />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};
export default RoutesData;
