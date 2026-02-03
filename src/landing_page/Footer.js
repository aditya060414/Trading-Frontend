import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div>
      <hr class="border opacity-100" style={{ margin: "0", width: "100%" }} />
      <div className="container-fluid footer-container">
        <div className="row justify-content-around footer">
          <div className="col footer-info justify-content-center">
            <a href="#">
              <img
                src="media/images/logo.svg"
                alt="logo"
                style={{ width: "55%" }}
              />
            </a>
            <p className="text-muted">
              © 2010 - 2025, Zerodha Broking Ltd.<br></br>All rights reserved.
            </p>
            <ul>
              <li>
                <a href="#">
                  <i class="fa-brands fa-x-twitter text-muted"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-brands fa-square-facebook text-muted"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-brands fa-instagram text-muted"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-brands fa-linkedin-in text-muted"></i>
                </a>
              </li>
            </ul>
            <hr></hr>
            <ul>
              <li>
                <a href="#">
                  <i class="fa-brands fa-youtube text-muted"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-brands fa-whatsapp text-muted"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-brands fa-telegram text-muted"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col additional-info-footer">
            <ul>
              <li className="head">Account</li>
              <li className="head-links">
                <a href="#">Open demat account</a>
              </li>
              <li className="head-links">
                <a href="#">Minor demat account</a>
              </li>
              <li className="head-links">
                <a href="#">NRI demat account</a>
              </li>
              <li className="head-links">
                <a href="#">Commodity</a>
              </li>
              <li className="head-links">
                <a href="#">Dematerialisation</a>
              </li>
              <li className="head-links">
                <a href="#">Fund transfer</a>
              </li>
              <li className="head-links">
                <a href="#">MTF</a>
              </li>
              <li className="head-links">
                <a href="#">Referral program</a>
              </li>
            </ul>
          </div>
          <div className="col additional-info-footer">
            <ul>
              <li className="head">Support</li>
              <li className="head-links">
                <a href="#">Contact us</a>
              </li>
              <li className="head-links">
                <a href="#">Support portal</a>
              </li>
              <li className="head-links">
                <a href="#">How to file a complaint?</a>
              </li>
              <li className="head-links">
                <a href="#">Status of your complaints</a>
              </li>
              <li className="head-links">
                <a href="#">Bulletin</a>
              </li>
              <li className="head-links">
                <a href="#">Circular</a>
              </li>
              <li className="head-links">
                <a href="#">Z-Connect blog</a>
              </li>
              <li className="head-links">
                <a href="#">Downloads</a>
              </li>
            </ul>
          </div>
          <div className="col additional-info-footer">
            <ul>
              <li className="head">Company</li>
              <li className="head-links">
                <a href="#">About</a>
              </li>
              <li className="head-links">
                <a href="#">Philosophy</a>
              </li>
              <li className="head-links">
                <a href="#">Press & media</a>
              </li>
              <li className="head-links">
                <a href="#">Careers</a>
              </li>
              <li className="head-links">
                <a href="#">Zerodha Cares (CSR)</a>
              </li>
              <li className="head-links">
                <a href="#">Zerodha.tech</a>
              </li>
              <li className="head-links">
                <a href="#">Open source</a>
              </li>
            </ul>
          </div>
          <div className="col additional-info-footer">
            <ul>
              <li className="head">Quick links</li>
              <li className="head-links">
                <a href="#">Upcoming IPOs</a>
              </li>
              <li className="head-links">
                <a href="#">Brokerage charges</a>
              </li>
              <li className="head-links">
                <a href="#">Market holidays</a>
              </li>
              <li className="head-links">
                <a href="#">Economic calendar</a>
              </li>
              <li className="head-links">
                <a href="#">Calculators</a>
              </li>
              <li className="head-links">
                <a href="#">Markets</a>
              </li>
              <li className="head-links">
                <a href="#">Sectors</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-end">
          <p className="text-muted">
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered
            Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony,
            Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru -
            560078, Karnataka, India. For any complaints pertaining to
            securities broking please write to{" "}
            <a href="#">complaints@zerodha.com</a>, for DP related to{" "}
            <a href="#">dp@zerodha.com</a>. Please ensure you carefully read the
            Risk Disclosure Document as prescribed by SEBI | ICF
          </p>
          <p className="text-muted">
            Procedure to file a complaint on <a href="#">SEBI SCORES</a>:
            Register on SCORES portal. Mandatory details for filing complaints
            on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
            Effective Communication, Speedy redressal of the grievances
          </p>
          <p className="text-muted">
            <a href="">Smart Online Dispute Resolution</a> |{" "}
            <a href="">Grievances Redressal Mechanism</a>
          </p>
          <p className="text-muted">
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p className="text-muted">
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p className="text-muted">
            India's largest broker based on networth as per NSE.{" "}
            <a href="">NSE broker factsheet</a>
          </p>
          <p className="text-muted">
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please{" "}
            <a href="">create a ticket here.</a>
          </p>
          <p className="text-muted">
            *Customers availing insurance advisory services offered by Ditto
            (Tacterial Consulting Private Limited | IRDAI Registered Corporate
            Agent (Composite) License No CA0738) will not have access to the
            exchange investor grievance redressal forum, SEBI SCORES/ODR, or
            arbitration mechanism for such products.
          </p>
        </div>
        <div className="text-center">
          <ul className="footer-end-links">
            <li>NSE</li>
            <li>BSE</li>
            <li>MCX</li>
            <li>Terms & conditions</li>
            <li>Policies & procedures</li>
            <li>Privacy</li>
            <li>policy</li>
            <li>Disclosure</li>
            <li>For investor's attention</li>
            <li>Investor charter</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
