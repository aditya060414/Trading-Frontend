import React from "react";

export default function University() {
  return (
    <div className="container-fluid">
      <div className=" main-container-university text-center">
        <h2>The Zerodha Universe</h2>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="row justify-content-evenly">
          <div className="col-3 d-flex flex-column zerodha-links-universitry">
            <a href="https://www.zerodhafundhouse.com/" target="_blank">
              <img
                src="media/images/zerodhafundhouse.png"
                style={{ width: "40%" }}
              />
            </a>
            <a href="https://www.zerodhafundhouse.com/" target="_blank">
              <p>
              Our asset management venture
              <br></br>
              that is creating simple and transparent index
              <br></br>
              funds to help you save for your goals.
              <br></br>
            </p>
            </a>
            <a href="https://www.streak.tech/home" target="_blank">
              <img
                src="media/images/streak-logo.png"
                style={{ width: "40%" }}
              />
            </a>
            <a href="https://www.streak.tech/home" target="_blank">
              <p>
              Options trading platform that lets you
              <br></br>
              create strategies, analyze positions, and examine 
              <br></br>
              data points like open interest, FII/DII, and more.
              <br></br>
            </p>
            </a>
          </div>
          <div className="col-3 d-flex flex-column zerodha-links-universitry">
            <a href="https://sensibull.com/" target="_blank">
              <img
                src="media/images/sensibull-logo.svg"
                style={{ width: "40%" }}
              />
            </a>
            <a href="https://sensibull.com/" target="_blank">
              <p>
                Options trading platform that lets you
                <br></br>
                create strategies, analyze positions, and examine
                <br></br>
                data points like open interest, FII/DII, and more.
                <br></br>
            </p>
            </a>
            <a href="https://smallcase.zerodha.com/" target="_blank">
              <img
                src="media/images/smallcase-logo.png"
                style={{ width: "50%" }}
              />
            </a>
            <a href="https://smallcase.zerodha.com/" target="_blank">
              <p>
                Thematic investing platform
                <br></br>
                that helps you invest in diversified
                <br></br>
                baskets of stocks on ETFs.
                <br></br>
            </p>
            </a>
          </div>
          <div className="col-3 d-flex flex-column zerodha-links-universitry">
            <a href="https://www.tijorifinance.com/dashboard/" target="_blank">
              <img src="media/images/tijori.svg" style={{ width: "40%" }} />
            </a>
            <a href="https://www.tijorifinance.com/dashboard/" target="_blank">
              <p>
                Investment research platform
                <br></br>
                that offers detailed insights on stocks,
                <br></br>
                sectors, supply chains, and more.
                <br></br>
            </p>
            </a>
            <a href="https://joinditto.in/" target="_blank">
              <img src="media/images/ditto-logo.png" style={{ width: "40%" }} />
            </a>
            <a href="https://joinditto.in/" target="_blank">
              <p>
                Personalized advice on life
                <br></br>
                and health insurance. No spam
                <br></br>
                and no mis-selling.
                <br></br>
            </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
