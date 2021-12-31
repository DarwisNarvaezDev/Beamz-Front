import React from 'react'

const CashCheckout = ({props}) => {
    
    const {dispatch} = props;

    return (
        <div className="cash-checkout-container animate__animated animate__fadeInUp">
            <div className="cash-checkout-wrapper">
                <table>
                    <tr>
                        <th>Cash terms</th>
                    </tr>
                    <tr>
                        <td className="payment-panel-margin-bottom">
                            Pay when you arrive to the venue, dont forget to present your ID.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button type="button" onClick={() => {
                                dispatch({type: 'PAYMENT_RECEIVED', payload: 1});
                            }}>Accept</button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default CashCheckout
