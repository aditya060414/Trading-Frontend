import React from "react";
import Hero from "./Hero";
import Charges from "./Charges";
import ChargeSection from "./ChargeSection";
import Footer from "../Footer"
import Navbar from "../Navbar"


export default function PricingPage(){
    return (
        <>
        <Navbar/>
        <Hero/>
        <div className="pricing-page-section">
        <Charges/>
        <ChargeSection/>
        <Footer/>
        </div>
        </>
    )
}