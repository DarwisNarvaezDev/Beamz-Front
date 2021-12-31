import React, { useEffect, useState } from 'react'
import PickTime from './PickTime'
import PickVenue from './PickVenue'
import Card from '../../Index/Cards/Card'
import PickDay from './PickDay'
import { Redirect } from 'react-router-dom'
import { compareMap } from '../reducer/CompareMapHelper'

const ConfirmPanel = ({props}) => {
    
    const mockMovie = {id: 1, title: "Mock Title", gender: "Mock gender", year: "1993", audience: "A", imgurl: process.env.PUBLIC_URL + '/resources/donramon.jpg', shortdescription: "mock", longdescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem nostrum officiis ducimus minima dolorem eius officia esse tempore, quam blanditiis numquam. Nihil ducimus dignissimos ea quia minus nulla temporibus nam magnam similique harum illum neque, perferendis corporis explicabo amet numquam modi, alias dicta architecto sint. Ullam tempore a perspiciatis ut.", category: "1", active: true};
    
    const { state, dispatch } = props;
    const [showIndex, setshowIndex] = useState(false);

    const [movieDisplayed, setmovieDisplayed] = useState(mockMovie);

    useEffect(() => {
        dispatch({type: 'MODAL_CONFIRM_MESSAGE', payload: 'Please confirm your movie preferences...'})
        const movie = sessionStorage.getItem('movieSelected')
        if( movie !== null ){
            setmovieDisplayed(JSON.parse(movie));
        }else{
            setmovieDisplayed(mockMovie);
            setshowIndex(true);
        }   
    }, [])

    return (
        <div className="confirm-panel-container animate__animated animate__fadeInRight">
            <div className="confirm-panel-wrapper">
                <div className="confirm-col1 confirm-col-col1">
                    <form className="combo-movie-container">
                        Select the venue
                        <PickVenue props={props} />
                        Select the day
                        <PickDay props={props} />
                        Set your date
                        <PickTime props={props} />
                        <div className="submit-movie-settings">
                            <div className="submit-movie-settings-wrapper">
                                <div className="submit-movie-settings-col1">
                                    <button type="submit" onClick={(e) => {
                                        e.preventDefault()
                                        dispatch({type: 'VALIDATE_CONFIRM_PANEL'})
                                    }}>Submit</button>
                                </div>
                                <div className="submit-movie-settings-col2">
                                    <button type="reset">Clear</button>
                                </div>
                            </div>
                        </div>
                        
                    </form>
                </div>
                <div className="confirm-col2">
                    <div className="confirm-movie-container">
                        <Card props={movieDisplayed} />
                        <div className="money-div">
                            Price per seat
                            <strong>$15.00</strong>
                        </div>
                    </div>
                </div>
            </div>
            {showIndex && (<Redirect to="/" />)}
        </div>
    )
}

export default ConfirmPanel
