import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/SignUpPage";
import About from "./landing_page/about/AboutPage";
import Product from "./landing_page/products/ProductsPage";
import Pricing from "./landing_page/pricing/PricingPage";
import Support from "./landing_page/support/SupportPage";
import Equity from "./landing_page/pricing/Equity"
import Currency from "./landing_page/pricing/Currency"
import Commodity from "./landing_page/pricing/Commodity"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/product" element={<Product/>}/>
    <Route path="/pricing" element={<Pricing/>}/>
    <Route path="/support" element={<Support/>}/>
    <Route path="/Equity" element={<Equity/>}/>
    <Route path="/Currency" element={<Currency/>}/>
    <Route path="/Commodity" element={<Commodity/>}/>
  </Routes>
  </BrowserRouter>
);
