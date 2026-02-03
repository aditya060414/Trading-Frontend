import React from "react";
import AccountCharges from "./AccountCharges";
import Maintenance from "./Maintenance";
import OptionalCharges from "./OptionalCharges";
import Explaination from "./Explaination";
import Brokerage from "./Brokerage";

export default function Charges() {
  return (
    <div className="charge-calculator-section">
      <Brokerage />
      <AccountCharges />
      <Maintenance />
      <OptionalCharges />
      <Explaination />
    </div>
  );
}
