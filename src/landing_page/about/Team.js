import React from "react";
import { Link } from "react-router-dom";

export default function Team() {
  return (
    <div className="container-fluid">
      <div className="team-details" style={{ paddingTop: "80px" }}>
        <h2
          className="text-center"
          style={{ fontWeight: "500", margin: "0 0 20px 0" }}
        >
          People
        </h2>
        <div className="row team-mini-container justify-content-between">
          <div className="team-ceo text-center col-4">
            <img
              src="media/images/ceo.jpg"
              style={{
                borderRadius: "50%",
                height: "295px",
                margin: "0 0 10px 0",
              }}
            />
            <h5 style={{ fontWeight: "400" }}>Nithin Kamath</h5>
            <p className="text-muted">Founder, CEO</p>
          </div>
          <div className="team-ceo col-7">
            <p style={{ fontSize: "1.1rem", fontWeight: "400" }}>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p style={{ fontSize: "1.1rem", fontWeight: "400" }}>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p style={{ fontSize: "1.1rem", fontWeight: "400" }}>
              Playing basketball is his zen.
            </p>
            <p style={{ fontSize: "1.1rem", fontWeight: "400" }}>
              Connect on <a href="#">Homepage</a> /{" "}
              <a href="#">TradingQnA</a> / <a href="#">Twitter</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
