import React from "react";

export default function LeftSection() {
  return (
    <div className="container-fluid additional-info-container">
      <div className="row justify-content-between">
        <div className="additional-info-left col-8">
          <details class="accordion">
            <summary class="acc-summary">
              <div class="left-box">
                <span class="plus-icon"></span>
              </div>
              <span class="title">Account Opening</span>
            </summary>

            <ul class="accordion-list">
              <li>
                <a href="#">Resident individual</a>
              </li>
              <li>
                <a href="#">Minor</a>
              </li>
              <li>
                <a href="#">Non Resident Indian (NRI)</a>
              </li>
              <li>
                <a href="#">Company, Partnership, HUF and LLP</a>
              </li>
              <li>
                <a href="#">Glossary</a>
              </li>
            </ul>
          </details>
          <details class="accordion">
            <summary class="acc-summary">
              <div class="left-box">
                <span class="material-symbols-outlined account-logo">
                  person
                </span>
              </div>
              <span class="title">Your Zerodha Account</span>
            </summary>

            <ul className="accordion-list">
              <li>
                <a href="#">Your Profile</a>
              </li>
              <li>
                <a href="#">Account modification</a>
              </li>
              <li>
                <a href="#">
                  Client Master Report (CMR) and Depository Participant (DP)
                </a>
              </li>
              <li>
                <a href="#">Nomination</a>
              </li>
              <li>
                <a href="#">Transfer and conversion of securities</a>
              </li>
            </ul>
          </details>
          <details class="accordion">
            <summary class="acc-summary">
              <div class="left-box">
                <span class="kite-logo"></span>
              </div>
              <span class="title">Kite</span>
            </summary>

            <ul className="accordion-list">
              <li>
                <a href="#">IPO</a>
              </li>
              <li>
                <a href="#">Trading FAQs</a>
              </li>
              <li>
                <a href="#">Margin Trading Facility (MTF) and Margins</a>
              </li>
              <li>
                <a href="#">Charts and orders</a>
              </li>
              <li>
                <a href="#">Alerts and Nudges</a>
              </li>
              <li>
                <a href="#">General</a>
              </li>
            </ul>
          </details>
          <details class="accordion">
            <summary class="acc-summary">
              <div class="left-box">
                <span class="material-symbols-outlined currence-accordion">
                  currency_rupee
                </span>
              </div>
              <span class="title">Funds</span>
            </summary>

            <ul class="accordion-list">
              <li>
                <a href="#">Add money</a>
              </li>
              <li>
                <a href="#">Withdraw money</a>
              </li>
              <li>
                <a href="#">Add bank accounts</a>
              </li>
              <li>
                <a href="#">eMandates</a>
              </li>
            </ul>
          </details>
          <details class="accordion">
            <summary class="acc-summary">
              <div class="left-box">
                <span class="material-symbols-outlined accordion-icon">
                  alternate_email
                </span>
              </div>
              <span class="title">Console</span>
            </summary>

            <ul class="accordion-list">
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Corporate actions</a>
              </li>
              <li>
                <a href="#">Funds statement</a>
              </li>
              <li>
                <a href="#">Reports</a>
              </li>
              <li>
                <a href="#">Profile</a>
              </li>
              <li>
                <a href="#">Segments</a>
              </li>
            </ul>
          </details>
          <details class="accordion">
            <summary class="acc-summary">
              <div class="left-box">
                <i class="fa-solid fa-c accordion-icon"></i>
              </div>
              <span class="title">Coin</span>
            </summary>

            <ul class="accordion-list">
              <li>
                <a href="#">Mutual funds</a>
              </li>
              <li>
                <a href="#">National Pension Scheme (NPS)</a>
              </li>
              <li>
                <a href="#">Fixed Deposit (FD)</a>
              </li>
              <li>
                <a href="#">Features on Coin</a>
              </li>
              <li>
                <a href="#">Payments and Orders</a>
              </li>
              <li>
                <a href="#">General</a>
              </li>
            </ul>
          </details>
        </div>
        <div className="additional-info-right col-3">
          <div
            className="info"
            style={{ margin: "20px 0 0 0", padding: "12px 20px" }}
          >
            <ul style={{ padding: "0 0 0 18px", margin: "0" }}>
              <li style={{ margin: "0", padding: "5px 0" }}>
                <a href="https://zerodha.com/marketintel/bulletin/440469/additional-exposure-margin-on-securities-under-mwpl-2">
                  Additional exposure margin on securities under MWPL
                </a>
              </li>
              <li style={{ margin: "0", padding: "5px 0" }}>
                <a href="https://zerodha.com/marketintel/bulletin/440479/adjustment-of-fo-contracts-of-wipro-due-to-dividend-2">
                  Adjustment of F&O contracts of WIPRO due to dividend
                </a>
              </li>
            </ul>
          </div>
          <div
            className="additional-links"
            style={{ padding: "20px 0 20px 0", margin: "0" }}
          >
            <div className="quick-links">
              <h3>Quick Links</h3>
            </div>
            <div className="links">
              <a href="#">1. Track account opening</a>
            </div>
            <div className="links">
              <a href="#">2. Track segment activation</a>
            </div>
            <div className="links">
              <a href="#">3. Intraday margins</a>
            </div>
            <div className="links">
              <a href="#">4. Kite user manual</a>
            </div>
            <div className="links">
              <a href="#">5. Learn how to create a ticket</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
