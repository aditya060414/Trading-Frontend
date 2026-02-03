import React from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import Education from "./Education";
import Pricing from "./Pricing";
import Trust from "./Trust";
import OpenAccount from "../OpenAccount";
import Footer from "../Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="home-page-section">
        <Hero />
        <Trust />
        <Pricing />
        <Education />
        <OpenAccount />
        <Footer />
      </div>
    </>
  );
}
