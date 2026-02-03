import React from "react";
import Hero from "./Hero";
import Team from "./Team";
import Navbar from "../Navbar";
import Footer from "../Footer";
import AboutCompany from "./AboutCompany";
export default function AboutPage() {
  return (
    <>
        <Navbar />
      <div className="about-page-section">
        <Hero />
        <AboutCompany />
        <Team />
        <Footer />
      </div>
    </>
  );
}
