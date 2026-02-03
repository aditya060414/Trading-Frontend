import React from "react";

export default function Hero() {
  return (
    <div className="container-fluid text-center hero-container-home" style={{padding:"0 20px 120px 20px"}}>
      <div className="row">
        <img
          src="media/images/hero.svg"
          alt="Hero image"
          className="p-0 mb-5"
          style={{width:"55%",margin:" auto"}}
        />
        <h1 className=" m-0 p-0">Invest in Everything</h1>
        <p className=" p-0 mb-5 mt-1" >
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          type="button"
          className="btn btn-primary"
          style={{ width: "12%", margin: "0 auto"}}
        >
          sign up for free
        </button>
      </div>
    </div>
  );
}
