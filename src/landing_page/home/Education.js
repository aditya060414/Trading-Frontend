import React from "react";

export default function Education() {
  return (
    <div className="container-fluid m-0 education">
      <div className="row justify-content-education">
        <div className="col-5 px-0 text-center">
          <img
            src="media/images/education.svg"
            alt="education"
            style={{ width: "60%" }}
          />
        </div>
        <div className="col-7 hero-education-home" style={{width:"40%"}}>
          <h2>Free and open market education</h2>
          <p style={{margin:"16px 0 15px 0"}} className="text-muted">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#" className="d-inline-flex align-items-center gap-1">
            Varsity
            <span className="material-symbols-outlined">arrow_right_alt</span>
          </a>
          <p style={{margin:"30px 0 15px 0"}} className="text-muted">
              TradingQ&amp;A, the most active trading and investment community
              in India for all your market related queries.
          </p>
          <a href="#" className="d-inline-flex align-items-center gap-1">
            TradingQ&amp;A
            <span className="material-symbols-outlined">arrow_right_alt</span>
          </a>
         </div>
      </div>
    </div>
  );
}
