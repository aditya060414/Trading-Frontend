import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Equity from "./Equity";
import Currency from "./Currency";
import Commodity from "./Commodity";

export default function Brokerage() {
  const [activeTab, setActiveTab] = useState("equity");
  return (
    <div className="pricing-tab-section">
      <ul className="nav flex-row pricing-tabs-link fs-3">
        <li className="nav-item">
          <button
            style={{ borderRadius: "none !important" }}
            className={`nav-link  ${activeTab === "equity" ? "active" : ""}`}
            onClick={() => setActiveTab("equity")}
          >
            Equity
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link  ${activeTab === "currency" ? "active" : ""}`}
            onClick={() => setActiveTab("currency")}
          >
            Currency
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link btn btn-lg ${activeTab === "commodity" ? "active" : ""}`}
            onClick={() => setActiveTab("commodity")}
          >
            Commodity
          </button>
        </li>
      </ul>
      <hr />
      {activeTab === "equity" && <Equity />}
      {activeTab === "currency" && <Currency />}
      {activeTab === "commodity" && <Commodity />}
      <h3
        className="text-center fs-4"
        style={{ margin: "20px 0 0 0", padding: "0",fontWeight:"400",color:"#3d3c3c" }}
      >
        <a href="#">Calculate your costs upfront</a> using our brokerage calculator
      </h3>
    </div>
  );
}
