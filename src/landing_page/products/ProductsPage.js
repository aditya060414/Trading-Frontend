import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import University from "./University";
import KnowMore from "./KnowMore";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SignUp from "./SignUp";

export default function ProductPage() {
  return (
    <>
      <Navbar />
      <div className="product-page-section">
      <Hero />
      <LeftSection
        imgUrl="media/images/products-kite.png"
        productTitle="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        link1="Try Demo ->"
        link2="Learn more ->"
        playstoreBadge="media/images/google-play-badge.svg"
        appStoreBadge="media/images/appstore-badge.svg"
      />
      <RightSection
        imgUrl="media/images/products-console.png"
        productTitle="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        link1="Learn more ->"
      />
      <LeftSection
        imgUrl="media/images/products-coin.png"
        productTitle="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        link1="Coin ->"
        link2=""
        playstoreBadge="media/images/google-play-badge.svg"
        appStoreBadge="media/images/appstore-badge.svg"
      />
      <RightSection
        imgUrl="media/images/landing.svg"
        productTitle="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        link1="Kite Connect ->"
      />
      <LeftSection
        imgUrl="media/images/varsity-products.svg"
        productTitle="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        link1=""
        link2=""
        playstoreBadge="media/images/google-play-badge.svg"
        appStoreBadge="media/images/appstore-badge.svg"
      />
      <KnowMore />
      <University />
      <SignUp />
      <Footer />
      </div>
    </>
  );
}
