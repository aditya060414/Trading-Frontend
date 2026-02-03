import React from "react";
import Hero from "./Hero";
import AdditionalInfo from "./AdditionalInfo";
import Navbar from "../Navbar";
import Footer from "../Footer";
export default function SupportPage(){
    return (
        <>
        <Navbar/>
        <Hero/>
        <div className="support-page-section">
        <AdditionalInfo/>
        <Footer/>
        </div>
        </>
    )
}