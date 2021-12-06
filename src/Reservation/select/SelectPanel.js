import React from 'react'
import SectorA from './sectors/SectorA'
import SectorB from './sectors/SectorB'
import SectorC from './sectors/SectorC'

const SelectPanel = () => {

    const butacaImg = process.env.PUBLIC_URL + 'resources/butaca.png'

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
                        <SectorA props={butacaImg} />
                        <SectorB props={butacaImg} />
                        <SectorC props={butacaImg} />
                    </div>
                </div>
                <div className="wrapper-r2">
                    <div className="list-boxes-wrapper">
                        <div className="movie-data-box">
                            <table>
                                <tr className="joy-division">
                                    <td className="title-td">Movie</td>
                                    <td>Mock movie</td>
                                </tr>
                                <tr>
                                    <td className="title-td">Date</td>
                                    <td>Mock date</td>
                                </tr>
                            </table>
                        </div>
                        <div className="seats-data-box">
                            <table>
                                <tr>
                                    <td className="title-td row-td">Seats Avaiable</td>
                                    <td className="row-td">Mock number</td>
                                </tr>
                                <tr>
                                    <td className="title-td row-td">Seats Selected</td>
                                    <td className="row-td">Mock number</td>
                                </tr>
                                <tr className="button-tr">
                                    <td colSpan="2">
                                        <a href="#" className="seat-confirm-button">Confirm</a>
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
