import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
      <nav
        className="navbar navbar-expand-lg text-center border-bottom "
        style={{ backgroundColor: "#ffffff" }}
      >
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/MarketExLogo.svg"
            alt="logo"
            style={{ width: "30%",display:"flex",padding:"0",margin:"0" }}

          />
        </Link>
        <div
          className="collapse navbar-collapse justify-content-around"
          id="navbarSupportedContent"
        >
          <form>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/authentication"
                >
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/support">
                  Support
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <i className="fa-solid fa-bars"></i>
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </nav>

  );
}
