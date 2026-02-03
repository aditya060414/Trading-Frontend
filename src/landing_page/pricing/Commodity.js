import React from "react";

export default function Commodity() {
  return (
    <div className="pricing-tab-section" style={{ padding: "0", margin: "0" }}>
      <table style={{ width: "100%" }}>
        <tr style={{ border: "1px solid #ddd" }}>
          <th style={{ width: "15%" }}></th>
          <th style={{ width: "40%" }}>Commodity futures</th>
          <th style={{ width: "40%" }}>Commodity options</th>
        </tr>
        <tr>
          <td>Brokerage</td>
          <td>0.03% or Rs. 20/executed order whichever is lower</td>
          <td>₹ 20/executed order</td>
        </tr>
        <tr>
          <td>STT/CTT</td>
          <td>0.01% on sell side (Non-Agri)</td>
          <td>0.05% on sell side</td>
        </tr>
        <tr>
          <td>Transaction charges</td>
          <td>
            MCX: 0.0021%<br></br>
            NSE: 0.0001%
          </td>
          <td>
            MCX: 0.0418%<br></br>
            NSE: 0.001%
          </td>
        </tr>
        <tr>
          <td>GST</td>
          <td>18% on (brokerage + SEBI charges + transaction charges)</td>
          <td>18% on (brokerage + SEBI charges + transaction charges)</td>
        </tr>
        <tr>
          <td>SEBI charges</td>
          <td>
            <p style={{fontWeight:"500",padding:"0",margin:"0"}}>Agri:</p>
            ₹1 / crore
            <br></br>
            <p style={{fontWeight:"500",padding:"0",margin:"0"}}>Non-agri:</p>
            ₹1 / crore
          </td>
          <td>₹10 / crore</td>
        </tr>
        <tr>
          <td>Stamp charges</td>
          <td>0.002% or ₹200 / crore on buy side</td>
          <td>0.003% or ₹300 / crore on buy side</td>
        </tr>
      </table>
    </div>
  );
}
