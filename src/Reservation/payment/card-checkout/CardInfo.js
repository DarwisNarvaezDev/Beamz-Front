import React from 'react'

const CardInfo = () => {
    return (
        <div className="card-info">
        <table>
            <tr>
                <th colSpan="2" className="payment-panel-margin-bottom">Card info</th>
            </tr>
            <tr className="payment-panel-margin-bottom">
                <td className="payment-panel-margin-bottom"><label for="serial" name="serial" id="serial">Number</label></td>
                <td className="payment-panel-margin-bottom"><input id="serial" type="text" className="long-input"></input></td>
            </tr>
            <tr className="payment-panel-margin-bottom">
                <td className="payment-panel-margin-bottom"><label for="name" name="name" id="name">Name in the Card</label></td>
                <td className="payment-panel-margin-bottom"><input id="serial" type="text" className="long-input"></input></td>
            </tr>
            <tr>
                <td><label for="cvs" name="cvs" id="cvs">CVS</label></td>
                <td><input id="cvs" type="password" className="short-input"></input></td>
            </tr>
        </table>
    </div>
    )
}

export default CardInfo
