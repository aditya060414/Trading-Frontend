import React from "react";

export default function OpenAccount() {
  return (
    <div className="open-account-container">
      <div className="open-account-mini-container text-center">
        <h2 style={{margin:"0 0 20px 0"}}>Open a Zerodha account</h2>
        <p style={{margin:"16px 0 15px 0"}}>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          type="button"
          className="btn btn-primary"
          style={{ width: "12%", margin: "20px 0 0 0" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}
