import React from "react";

export default function Currency() {
  return (
    <div className="pricing-tab-section" style={{padding:"0",margin:"0"}}>
      <table style={{ width: "100%" }}>
        <tr style={{ border: "1px solid #ddd" }}>
          <th style={{ width: "15%" }}></th>
          <th style={{ width: "40%" }}>Currency futures</th>
          <th style={{ width: "40%" }}>Currency options</th>
        </tr>
        <tr>
          <td>Brokerage</td>
          <td>0.03% or ₹ 20/executed order whichever is lower</td>
          <td>₹ 20/executed order</td>
        </tr>
        <tr>
          <td>STT/CTT</td>
          <td>No STT</td>
          <td>No STT</td>
        </tr>
        <tr>
          <td>Transaction charges</td>
          <td>
            NSE: 0.00035%<br></br>
            BSE: 0.00045%
          </td>
          <td>
            NSE: 0.0311%<br></br>
            BSE: 0.001%
          </td>
          
        </tr>
        <tr>
          <td>GST</td>
          <td>18% on (brokerage + SEBI charges + transaction charges)</td>
          <td>18% on (brokerage + SEBI charges + transaction charges)</td>
        </tr>
        <tr>
          <td>SEBI charges</td>
          <td>₹10 / crore</td>
          <td>₹10 / crore</td>
        </tr>
        <tr>
          <td>Stamp charges</td>
          <td>0.0001% or ₹10 / crore on buy side</td>
          <td>0.0001% or ₹10 / crore on buy side</td>
        </tr>
      </table>
    </div>
  );
}
