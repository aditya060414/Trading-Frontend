import React from "react";

export default function Pricing() {
  return (
    <div className="container-fluid pricing-container-home">
      <div className="row v-align around">
        <div className="col-5 px-0" style={{width:"40%"}}>
          <h2 className="pricing-hero">Unbeatable pricing</h2>
          <p className="my-2 text-muted" >
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
        </div>
        <div className="col-6 pricing-section-home">
          <div className="pricing-box-content">
            <div className="pricing-box">
              <img
                src="media/images/zerorupees.svg"
                alt="zero rupees"
                style={{ width: "50%" }}
              />
              <p>
                free account
                <br></br>
                opening
              </p>
            </div>
            <div className="pricing-box">
              <img
                src="media/images/zerorupees.svg"
                alt="zero rupees"
                style={{ width: "50%" }}
              />
              <p>
                Free equity delivery<br></br>and direct mutual funds
              </p>
            </div>
            <div className="pricing-box">
              <img
                src="media/images/twentyrupees.svg"
                alt="twenty rupees"
                style={{ width: "50%" }}
              />
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
         <div className="see-pricing-home col-11" style={{width:"91%"}}>
            <a href="#" className="d-inline-flex align-items-center gap-1">
          See pricing
          <span className="material-symbols-outlined">arrow_right_alt</span>
        </a>
        </div>
      </div>
    </div>
  );
}
