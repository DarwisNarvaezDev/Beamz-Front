import { set } from 'express/lib/application';
import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom';
import Card from '../../Index/Cards/Card'

const SummaryPanel = ({ props }) => {

    const mockMovie = { id: 1, title: "Mock Title", gender: "Mock gender", year: "1993", audience: "A", imgurl: process.env.PUBLIC_URL + '/resources/donramon.jpg', shortdescription: "mock", longdescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem nostrum officiis ducimus minima dolorem eius officia esse tempore, quam blanditiis numquam. Nihil ducimus dignissimos ea quia minus nulla temporibus nam magnam similique harum illum neque, perferendis corporis explicabo amet numquam modi, alias dicta architecto sint. Ullam tempore a perspiciatis ut.", category: "1", active: true };

    const { state, dispatch } = props;

    const uppercaseWords = str => str.replace(/^(.)|\s+(.)/g, c => c.toUpperCase());

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const [movieDisplayed, setmovieDisplayed] = useState(mockMovie);

    const initialState = 'Mock';
    const [day, setDay] = useState(initialState);
    const [hour, setHour] = useState(initialState);
    const [venue, setVenue] = useState(initialState);

    const [Seats, setSeats] = useState(initialState);

    const [PriceToShow, setPriceToShow] = useState(initialState);

    const [PaymentMethod, setPaymentMethod] = useState(initialState);

    const [showLoading, setshowLoading] = useState(false);

    const [orderAccepted, setorderAccepted] = useState(false);

    const [showSuccess, setshowSuccess] = useState(false);

    const awaitState = async () => {

        const { day, date, venue, seatsSelected, priceToShow, paymentMethod } = state
        setDay(day);
        setHour(date);
        setVenue(venue);
        setSeats(seatsSelected);
        setPriceToShow(priceToShow);
        setPaymentMethod(paymentMethod);

    }

    const awaitOrderStatus = async() => {

        const orderStatus = await state.orderAccepted;
        setorderAccepted(orderStatus);

    }

    useEffect(() => {

        awaitOrderStatus();

    }, [props])

    useEffect(() => {
        awaitState();
        const movie = JSON.parse(sessionStorage.movieSelected);
        if (movie !== undefined) {
            setmovieDisplayed(movie);
        }
    }, [day])

    return (
        <>
            {showLoading && (<div className='summary-section'>
                <div className='loader'></div>
            </div>)}
            <div className="summary-container animate__animated animate__fadeInRight">
                <div className="summary-wrapper">
                    <div className="summary-wrapper-col1">
                        <div className="summary-wrapper-col1-r1">
                            <Card props={movieDisplayed} />
                        </div>
                        <div className="summary-wrapper-col1-r2">
                            <table>
                                <tr>
                                    <th colSpan="2" className="bottom-line">Your date</th>
                                </tr>
                                <tr>
                                    <td className="bottom-line right-line">Day</td>
                                    <td className="bottom-line">{uppercaseWords(day)}</td>
                                </tr>
                                <tr>
                                    <td className="bottom-line right-line">Hour</td>
                                    <td className="bottom-line">{hour} Hrs</td>
                                </tr>
                                <tr>
                                    <td className="right-line">Venue</td>
                                    <td>{uppercaseWords(venue)}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="summary-wrapper-col2">
                        <div className="summary-wrapper-col2-wrapper">
                            <div className="summary-wrapper-col2-wrapper-r1">
                                <table>
                                    <tr>
                                        <th className="bottom-line">Your seats</th>
                                    </tr>
                                    <tr>
                                        <td>{Seats.toString().split(',').map(capitalize).join(',')}</td>
                                    </tr>
                                </table>
                            </div>
                            <div className="summary-wrapper-col2-wrapper-r2">
                                <table>
                                    <tr>
                                        <th colSpan="2" className="bottom-line">Payment info</th>
                                    </tr>
                                    <tr>
                                        <td className="bottom-line right-line">Total value</td>
                                        <td className="bottom-line">$ {PriceToShow}.00</td>
                                    </tr>
                                    <tr>
                                        <td className="right-line">Method</td>
                                        <td>{uppercaseWords(PaymentMethod)}</td>
                                    </tr>
                                </table>
                            </div>
                            <div className="summary-wrapper-col2-wrapper-r3">
                                <button type="submit" onClick={() => {
                                    dispatch({ type: 'GET_TICKETS' })
                                    setshowLoading(true);
                                    setTimeout(() => {
                                        setshowSuccess(true);
                                    }, 3000)
                                }}>Get your tickets!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showSuccess && (<Redirect to="successful-purchase" />)}
        </>
    )
}

export default SummaryPanel
