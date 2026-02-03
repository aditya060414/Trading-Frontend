import React from "react";
import Hero from "./Hero";
import ExploreAccounts from "./ExploreAccounts";
import ExploreInvestments from "./ExploreInvestments";
import StepsToOppenAccount from "./StepsToOppenAccount";
import FAQ from "./FAQ";
import Navbar from "../Navbar"
import Footer from "../Footer"

export default function SignUp() {
  return (
    <>
      <Navbar />
      <Hero />
      <ExploreAccounts />
      <StepsToOppenAccount />
      <ExploreInvestments />
      <FAQ />
      <Footer />
    </>
  );
}
