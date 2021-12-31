import React from 'react'
import BillingInfo from './card-checkout/BillingInfo'
import CardInfo from './card-checkout/CardInfo'

const CardCheckout = ({props}) => {
    
    const { dispatch } = props;
    
    return (
        <div className="card-checkout-container animate__animated animate__fadeInUp">
            <div className="card-checkout-wrapper">
                <CardInfo />
                <BillingInfo />
                <div className="card-submit">
                    <button type="button" onClick={() => {
                        dispatch({ type: 'PAYMENT_RECEIVED', payload: 2 });
                    }}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default CardCheckout
