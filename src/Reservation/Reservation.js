import React, { useEffect, useReducer, useState } from 'react'
import { Link } from 'react-router-dom'
import { ReservationReducer } from './reducer/ReservationReducer'
import { ReservationDefaultStates } from './reducer/ReservationDefaultStates'
import ConfirmPanel from './confirm/ConfirmPanel'
import SelectPanel from './select/SelectPanel'
import Confirm from './confirm/Confirm'
import Select from './select/Select'
import PaymentPanel from './payment/PaymentPanel'
import Payment from './payment/Payment'
import Summary from './summary/Summary'
import SummaryPanel from './summary/SummaryPanel'

const Reservation = () => {

    const [getSelected, setGetSelected] = useState("")

    const [state, dispatch] = useReducer(ReservationReducer, ReservationDefaultStates)

    const reducerObject = { state: state, dispatch: dispatch }

    const butacaImg = process.env.PUBLIC_URL + 'resources/butaca.png'

    return (
        <div className="reservation-main-container animate__animated animate__fadeIn">
            <div className="go-back">
                <div className="go-back-wrapper">
                    <div className="reservations-messages">
                        Mensajes modales
                    </div>
                    <div className="go-back-button">
                        <Link to="/">Go back</Link>
                    </div>
                </div>
            </div>
            <div className="reservation-container">
                <div className="res-col1">
                    <Confirm props={reducerObject} />
                    <Select props={reducerObject} />
                    <Payment props={reducerObject} />
                    <Summary props={reducerObject} />
                </div>
                <div className="res-col2">
                    {state.showConfirmPanel && (<ConfirmPanel />)}
                    {state.showSelectPanel && (<SelectPanel />)}
                    {state.showPaymentPanel && (<PaymentPanel />)}
                    {state.showSummary && (<SummaryPanel />)}
                </div>
            </div>
        </div>
    )
}

export default Reservation
