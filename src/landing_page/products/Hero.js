import React from "react";

export default function Hero() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="text-center products-hero"
          style={{ padding: "100px 0 100px 0", margin: "0 11px 0 11px" }}
        >
          <h2 className="text-muted fs-3">Zerodha Products</h2>
          <p>Sleek, modern, and intuitive trading platforms</p>
          <p className="text-muted fs-6" >
            Check out our <a href="#">
              investment offerings -{`>`}
            </a>
          </p>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
