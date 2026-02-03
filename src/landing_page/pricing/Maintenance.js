import React from "react";

export default function Maintenance(){
    return (
        <div className="pricing-tab-section">
            <h2>Demat AMC (Annual Maintenance Charge)</h2>
            <table style={{width:"100%"}}>
                <tr style={{border:"1px solid #ddd"}}>
                    <th style={{width:"30%"}}>Value of holdings</th>
                    <th style={{width:"30%"}}>AMC</th>
                </tr>
                <tr>
                    <td>Up to &#8377;4 lakh</td>
                    <td>
                        <span className="pricing-free-charge">Free*</span>
                    </td>
                </tr>
                <tr>
                    <td>&#8377;4 lakh - &#8377;10 lakh</td>
                    <td>
                        &#8377;100 per year, charged quarterly*
                    </td>
                </tr>
                <tr>
                    <td>Above &#8377;10 lakh</td>
                    <td>
                        &#8377;300 per year, charged quarterly
                    </td>
                </tr>
            </table>
            <p>* Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA). BSDA account holders cannot hold more than one demat account. To learn more about BSDA, <br></br><a href="#">click here.</a></p>
        </div>
    )
}