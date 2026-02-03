import React from "react";

export default function Charges() {
  return (
    <div className="pricing-container">
      <div className="container-fluid">
        <div className="row justify-content-evenly text-center">
          <div className="col-3 charges-section">
            <img src="media/images/zerorupees.svg" />
            <h2>Free equity delivery</h2>
            <p>
              All equity delivery investments (NSE, BSE), <br></br>are absolutely
              free — ₹ 0 brokerage.
            </p>
          </div>
          <div className="col-3 charges-section">
            <img src="media/images/twentyrupees.svg" />
            <h2>Intraday and F&O trades</h2>
            <p>
              Flat ₹ 20 or 0.03% (whichever is lower) per<br></br>executed order
              on intraday trades across<br></br>equity, currency, and commodity
              trades. Flat<br></br>₹20 on all option trades.
            </p>
          </div>
          <div className="col-3 charges-section">
            <img src="media/images/zerorupees.svg" />
            <h2>Free direct MF</h2>
            <p>
              All direct mutual fund investments are<br></br>absolutely free — ₹ 0
              commissions & DP<br></br>charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
