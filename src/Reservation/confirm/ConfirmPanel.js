import React from 'react'
import PickTime from './PickTime'
import PickVenue from './PickVenue'
import Card from '../../Index/Cards/Card'
import PickDay from './PickDay'

const ConfirmPanel = () => {
    
    const imgurl = process.env.PUBLIC_URL + '/resources/donramon.jpg'
    const mockMovie = {id: 1, title: "Mock Title", gender: "Mock gender", year: "1993", audience: "A", imgurl: imgurl, shortdescription: "mock", longdescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem nostrum officiis ducimus minima dolorem eius officia esse tempore, quam blanditiis numquam. Nihil ducimus dignissimos ea quia minus nulla temporibus nam magnam similique harum illum neque, perferendis corporis explicabo amet numquam modi, alias dicta architecto sint. Ullam tempore a perspiciatis ut.", category: "1", active: true};
    
    return (
        <div className="confirm-panel-container animate__animated animate__fadeInRight">
            <div className="confirm-panel-wrapper">
                <div className="confirm-col1 confirm-col-col1">
                    <div className="combo-movie-container">
                        Select the venue
                        <PickVenue />
                        Select the day
                        <PickDay />
                        Set your date
                        <PickTime />
                        <div className="submit-movie-settings">
                            <div className="submit-movie-settings-wrapper">
                                <div className="submit-movie-settings-col1">
                                    <button type="submit">Submit</button>
                                </div>
                                <div className="submit-movie-settings-col2">
                                    <button type="reset">Clear</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="confirm-col2">
                    <div className="confirm-movie-container">
                        <Card props={mockMovie} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmPanel
