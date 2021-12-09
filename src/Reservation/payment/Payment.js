import React from 'react'

const Payment = ({props}) => {
    
    const {state, dispatch} = props
    
    return (
        <div className={state.paymentSelected}>
        <a onClick={() => {
            dispatch({ type: "PAYMENT_CLICK" })
        }}>Payment info</a>
    </div>
    )
}

export default Payment
