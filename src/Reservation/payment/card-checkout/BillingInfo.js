import React from 'react'

const BillingInfo = () => {
    return (
        <div className="billing">
                    <table>
                        <tr>
                            <th colSpan="6" className="payment-panel-margin-bottom">Billing Info</th>
                        </tr>
                        <tr>
                            <td className="payment-panel-margin-bottom" colSpan="1"><label id="fullname" name="fullname" for="fullname">Full name</label></td>
                            <td className="payment-panel-margin-bottom" colSpan="4"><input type="text" className="long-billing-input"></input></td>
                        </tr>
                        <tr>
                            <td className="payment-panel-margin-bottom" colSpan="1">
                                <label id="Address" name="Address" for="Address">Address</label>
                            </td>
                            <td className="payment-panel-margin-bottom" colSpan="2">
                                <input type="text" className="long-billing-input"></input>
                            </td>
                        </tr>
                        <tr>
                        <td className="payment-panel-margin-bottom">
                                <label id="zip" for="zip" name="zip">Zip code</label>
                            </td>
                            <td className="payment-panel-margin-bottom">
                                <input type="text" className="long-billing-input"></input>
                            </td>
                        </tr>
                        <tr>
                            <td><label name="notes" id="notes">Notes</label></td>
                            <td colSpan="6"><input type="text" className="long-billing-input"></input></td>
                        </tr>
                    </table>
                </div>
    )
}

export default BillingInfo
