import React from "react";

export default function OptionalCharges(){
    return (
        <div className="pricing-tab-section">
            <h2>Charges for account opening</h2>
            <table style={{width:"100%"}}>
                <tr style={{border:"1px solid #ddd"}}>
                    <th style={{width:"30%"}}>Service</th>
                    <th style={{width:"30%"}}>Billing Frquency</th>
                    <th style={{width:"30%"}}>Charges</th>
                </tr>
                <tr>
                    <td>Tickertape</td>
                    <td>
                        Monthly / Annual
                    </td>
                    <td>Free: 0 | Pro: 249/2399</td>
                </tr>
                <tr>
                    <td>Smallcase</td>
                    <td>
                        Per transaction
                    </td>
                    <td>Buy & Invest More: 100 | SIP: 10</td>
                </tr>
                <tr>
                    <td>Kite Connect</td>
                    <td>
                        Monthly
                    </td>
                    <td>Connect: 500 | Personal: Free</td>
                </tr>
                <tr>
                    <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                    <td>
                        &#8377;&nbsp;500
                    </td>
                </tr>
            </table>
        </div>
    )
}