import React from "react";

export default function Trust() {
  return (
    <div
      className="container-fluid"
      style={{ padding: "0 20px 120px 20px", marginTop: "30px" }}
    >
      <div className="container">
        <div className="row gx-5 v-align-trust between-trust">
          <div className="col-4 p-0">
            <h2 style={{ marginBottom: "40px" }}>Trust with confidence</h2>
            <div className="why-us-section">
              <h3>Customer-first a-sectoinlways</h3>
              <p className="why-us-section-p text-muted">
                That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
                crores of equity investments, making us India’s largest broker;
                contributing to 15% of daily retail exchange volumes in India.
              </p>
            </div>
            <div className="why-us-section">
              <h3>No spam or gimmicks</h3>
              <p className="why-us-section-p text-muted">
                No gimmicks, spam, "gamification", or annoying push
                notifications. High quality apps that you use at your pace, the
                way you like. <a href="#">Our philosophies.</a>
              </p>
            </div>
            <div className="why-us-section">
              <h3>The Zerodha universe</h3>
              <p className="why-us-section-p text-muted">
                Not just an app, but a whole ecosystem. Our investments in 30+
                fintech startups offer you tailored services specific to your
                needs.
              </p>
            </div>
            <div className="why-us-section">
              <h3>Do better with money</h3>
              <p className="why-us-section-p text-muted">
                With initiatives like <a href="#">Nudge</a> and{" "}
                <a href="#">Kill Switch</a>, we don't just facilitate
                transactions, but actively help you do better with your money.
              </p>
            </div>
          </div>
          <div className="col-6 text-center p-0 m-0">
            <div className="text-center">
              <a href="#">
                <img
                  src="media/images/trust.png"
                  alt="The Zeroda Universe"
                  style={{ width: "90%" }}
                />
              </a>
              <p className="text-center">
                <a href="#" className="d-inline-flex align-items-center gap-1">
                  Explore our product
                  <span className="material-symbols-outlined">
                    arrow_right_alt
                  </span>
                </a>
                <a href="#" className="d-inline-flex align-items-center gap-1 mx-4">
                  Try kite demo
                  <span className="material-symbols-outlined">
                    arrow_right_alt
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
            <div className="press-strip text-center">
                <img src="media/images/press-logos.png" alt="press-image"/>
            </div>
    </div>
  );
}
