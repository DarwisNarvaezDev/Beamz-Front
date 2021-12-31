import React, { useEffect, useState } from 'react'
import CardCheckout from './CardCheckout';
import CashCheckout from './CashCheckout';
import PaymentSelector from './PaymentSelector';

const PaymentPanel = ({props}) => {
    
    const [showCashCheckout, setShowCashCheckout] = useState(false);
    const [showCashSelected, setShowCashSelected] = useState("");

    const [showCardCheckout, setShowCardCheckout] = useState(false);
    const [showCardSelected, setShowCardSelected] = useState("");

    const paymentObject = {
        showCashCheckout: showCashCheckout,
        setShowCashCheckout: setShowCashCheckout,
        showCashSelected: showCashSelected,
        setShowCashSelected: setShowCashSelected,
        showCardCheckout: showCardCheckout,
        setShowCardCheckout: setShowCardCheckout,
        showCardSelected: showCardSelected,
        setShowCardSelected: setShowCardSelected,
        reducerObject: props
        }
    
    return (
        <div className="payment-panel-container animate__animated animate__fadeInRight">
            <div className="payment-panel-wrapper">
                <div className="payment-wrapper-col1">
                    <PaymentSelector props={paymentObject} />
                </div>
                <div className="payment-wrapper-col2">
                    {showCashCheckout && (<CashCheckout props={props} />)}
                    {showCardCheckout && (<CardCheckout props={props} />)}
                </div>
            </div>
        </div>
    )
}

export default PaymentPanel
