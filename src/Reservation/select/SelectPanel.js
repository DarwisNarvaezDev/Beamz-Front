import React, { useEffect, useState } from 'react'
import { compareMap } from '../reducer/CompareMapHelper'
import SectorA from './sectors/SectorA'
import SectorB from './sectors/SectorB'
import SectorC from './sectors/SectorC'

const SelectPanel = ({ props }) => {

    const { state, dispatch } = props;
    const butacaImg = process.env.PUBLIC_URL + 'resources/butaca.png'
    const date = new Date();
    
    let seatsSelected = [];
    const [seatsSelectedArray, setseatsSelectedArray] = useState(seatsSelected);

    const [seatsAvaiable, setseatsAvaiable] = useState(0);

    const confirmButtonDefaultClass = 'seat-confirm-button';
    const [confirmButtonStateClass, setconfirmButtonStateClass] = useState(confirmButtonDefaultClass);
    
    const mockMovie = {id: 1, title: "Mock Title", gender: "Mock gender", year: "1993", audience: "A", imgurl: process.env.PUBLIC_URL + '/resources/donramon.jpg', shortdescription: "mock", longdescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem nostrum officiis ducimus minima dolorem eius officia esse tempore, quam blanditiis numquam. Nihil ducimus dignissimos ea quia minus nulla temporibus nam magnam similique harum illum neque, perferendis corporis explicabo amet numquam modi, alias dicta architecto sint. Ullam tempore a perspiciatis ut.", category: "1", active: true};
    const [movieDisplayed, setmovieDisplayed] = useState(mockMovie);

    const uppercaseWords = str => str.replace(/^(.)|\s+(.)/g, c => c.toUpperCase());

    const dateToDisplay = `${uppercaseWords(state.day)}, ${date.getDate()}/${date.getUTCFullYear()} - ${state.date} Hrs`

    const pushSeatsToArray = (seat) => {

        // console.log(`Entré al metodo push, llenando array`);

        if (!seatsSelectedArray.includes(seat)) {
            setconfirmButtonStateClass('seat-confirm-button-enabled');
            setseatsSelectedArray(prevState => [...prevState, seat]);
        }

        // console.log(`Array despues del llenado: ${seatsSelectedArray}`);

    }

    const removeItemFromArray = (seat) => {

        // console.log(`Entrando al metodo remove, removiendo items...`);

        const filteredArray = seatsSelectedArray.filter(item => item !== seat);
        setseatsSelectedArray(filteredArray);

        // console.log(`Items filtrados, diferentes del asiento que me pasaste: ${filteredArray}`);

    }

    const awaitClasses = async() => {

        if( seatsSelectedArray.length === 0 ){
            const { confirmSeatButtonClass, seatsAvaiable } = state;
            setconfirmButtonStateClass(confirmSeatButtonClass);
            setseatsAvaiable(seatsAvaiable.length);
        }
        
    }

    const reducerObjectForSeats = { state: state, dispatch: dispatch, butacaImg: butacaImg, pushSeatsToArray: pushSeatsToArray, removeItemFromArray: removeItemFromArray };

    useEffect(() => {
        compareMap(props);
    }, [])
    
    useEffect(() => {
        awaitClasses();
        const movie = JSON.parse(sessionStorage.movieSelected);
        if( movieDisplayed !== undefined ){
            setmovieDisplayed(movie);
        }
    }, [props])

    useEffect(() => {
        if( seatsSelectedArray.length === 0 ){
            setconfirmButtonStateClass(confirmButtonDefaultClass);
        }
    }, [seatsSelectedArray])

    return (
        <div className="select-panel-container animate__animated animate__fadeInRight">
            <div className="croquis-wrapper">
                <div className="spacer">
                    <h2>Pick your seats</h2>
                    <div className="screen-wrapper">
                        <div className="screen">
                            Screen
                        </div>
                    </div>
                    <div className="wrapper-r1">
                        <SectorA props={reducerObjectForSeats} />
                        <SectorB props={reducerObjectForSeats} />
                        <SectorC props={reducerObjectForSeats} />
                    </div>
                </div>
                <div className="wrapper-r2">
                    <div className="list-boxes-wrapper">
                        <div className="movie-data-box">
                            <table>
                                <tr className="joy-division">
                                    <td className="title-td">Movie</td>
                                    <td>{uppercaseWords(movieDisplayed.title)}</td>
                                </tr>
                                <tr>
                                    <td className="title-td">Date</td>
                                    <td>{dateToDisplay}</td>
                                </tr>
                            </table>
                        </div>
                        <div className="seats-data-box">
                            <table>
                                <tr>
                                    <td className="title-td row-td">Seats Avaiable</td>
                                    <td className="row-td">{seatsAvaiable}</td>
                                </tr>
                                <tr>
                                    <td className="title-td row-td">Seats Selected</td>
                                    <td className="row-td">{seatsSelectedArray.length}</td>
                                </tr>
                                <tr className="button-tr">
                                    <td colSpan="2">
                                        <a href="#" className={confirmButtonStateClass} onClick={() => {
                                            if( seatsSelectedArray.length !== 0 ){
                                                dispatch({type: 'SEATS_SELECTED', payload: seatsSelectedArray});
                                                dispatch({type: 'TAG_SEATS', payload: seatsSelectedArray});
                                            }else{
                                                dispatch({type: 'MODAL_NOTIFICATION', payload: {message: 'Please select your seats before continue', modalType: 3}});
                                            }
                                        }}>Confirm</a>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectPanel
