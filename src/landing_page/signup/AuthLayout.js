import React, { use } from "react";
import { useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import Button from "@mui/material/Button";

export default function AuthLayout() {
  const [isSignUp, setIsSignUp] = useState(true);
  const handleButtonClick = () => {
    setIsSignUp(!isSignUp);
  };
  return (
    <>
      <div className="container-fluid auth-layout">
        <div className="row auth-layout-container">
          <div className="col-6 authbrandf-info">
            <h4>MarketEx</h4>
            <div className="brand-tagline">
              <p>Smart.</p>
              <p>Secure.</p>
              <p>Confident Trading.</p>
            </div>
            <div className="brand-bio">
              <p>
                A modern trading platform built for long-term investors and
                active traders
              </p>
            </div>
            <div className="graph-img">
              <img src="media/images/graph.png" alt="graph-image" />
            </div>
          </div>
          <div className="col-6 signup-login toggle">
            {isSignUp ? <SignUp /> : <Login />}
            <Button variant="contained" onClick={handleButtonClick}>
                {isSignUp ? "Login" : "SignUp"}
                </Button>
          </div>
        </div>
      </div>
    </>
  );
}
