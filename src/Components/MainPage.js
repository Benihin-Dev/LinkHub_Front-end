import React from "react";
import NavBar from "./HomeNavBar";
import Home from "./Home";
import Plans from "./Plans";
import Contact from "./Contact";
import Footer from "./Footer";
import { Element } from "react-scroll";

export default function MainPage() {
  return (
    <>
      <NavBar />

      <Element name="home-section">
        <Home />
      </Element>

      <Element name="plans-section">
        <Plans />
      </Element>

      <Element name="contact-section">
        <Contact />
      </Element>

      <Footer />
    </>
  );
}
