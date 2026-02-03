import React from "react";

export default function AccountCharges(){
    return (
        <div className="pricing-tab-section">
            <h2>Charges for account opening</h2>
            <table style={{width:"100%"}}>
                <tr style={{border:"1px solid #ddd"}}>
                    <th style={{width:"80%"}}>Type of account</th>
                    <th style={{width:"20%"}}>Charges</th>
                </tr>
                <tr>
                    <td>Online account</td>
                    <td>
                        <span className="pricing-free-charge">Free</span>
                    </td>
                </tr>
                <tr>
                    <td>Offline account</td>
                    <td>
                        <span className="pricing-free-charge">Free</span>
                    </td>
                </tr>
                <tr>
                    <td>NRI account (offline only)</td>
                    <td>
                        &#8377;&nbsp;500
                    </td>
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