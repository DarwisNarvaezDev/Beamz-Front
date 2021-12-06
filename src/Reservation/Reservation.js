import React, { useEffect, useReducer, useState } from 'react'
import { Link } from 'react-router-dom'
import { ReservationReducer } from './reducer/ReservationReducer'
import { ReservationDefaultStates } from './reducer/ReservationDefaultStates'
import ConfirmPanel from './confirm/ConfirmPanel'
import SelectPanel from './select/SelectPanel'
import Confirm from './confirm/Confirm'
import Select from './select/Select'

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
                    <div className="get-div">
                        <div className="payment-div">
                            <a className={getSelected}>Payment info</a>
                        </div>
                    </div>
                    <div className="summary-div">
                        <div className="summary-div-wrapper">
                            <a className={getSelected}>Summary</a>
                        </div>
                    </div>
                </div>
                <div className="res-col2">
                    {state.showConfirmPanel && (<ConfirmPanel />)}
                    {state.showSelectPanel && (<SelectPanel />)}
                </div>
            </div>
        </div>
    )
}

export default Reservation
