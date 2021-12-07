import React from 'react'

const PaymentSelector = ({ props }) => {

    const {
        showCashCheckout,
        setShowCashCheckout,
        showCashSelected,
        setShowCashSelected,
        showCardCheckout,
        setShowCardCheckout,
        showCardSelected,
        setShowCardSelected
    } = props

    return (
        <div className="payment-panel-table-wrapper animate__animated animate__fadeInUp">
            <p>Choose your payment method </p>
            <table>
                <tr>
                    <td className="payment-panel-margin-bottom"><input className={showCashSelected} type="checkbox" name="cash" id="cash" onChange={() => {

                        setShowCashCheckout(true);
                        setShowCardCheckout(false);

                        setShowCashSelected("selected-input-checkbox");
                        setShowCardSelected("");

                    }}></input><label for="cash"> Cash</label></td>
                </tr>
                <tr>
                    <td><input className={showCardSelected} type="checkbox" name="card" id="card" onChange={() => {

                        setShowCashCheckout(false);
                        setShowCardCheckout(true);

                        setShowCashSelected("");
                        setShowCardSelected("selected-input-checkbox");

                    }}></input><label for="card" > Credit / Debit card</label></td>
                </tr>
            </table>
        </div>
    )
}

export default PaymentSelector
