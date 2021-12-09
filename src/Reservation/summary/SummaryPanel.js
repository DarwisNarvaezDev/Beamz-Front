import React from 'react'
import Card from '../../Index/Cards/Card'

const SummaryPanel = () => {
    
    const imgurl = process.env.PUBLIC_URL + '/resources/donramon.jpg'
    const mockMovie = {id: 1, title: "Mock Title", gender: "Mock gender", year: "1993", audience: "A", imgurl: imgurl, shortdescription: "mock", longdescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem nostrum officiis ducimus minima dolorem eius officia esse tempore, quam blanditiis numquam. Nihil ducimus dignissimos ea quia minus nulla temporibus nam magnam similique harum illum neque, perferendis corporis explicabo amet numquam modi, alias dicta architecto sint. Ullam tempore a perspiciatis ut.", category: "1", active: true};
    
    return (
        <div className="summary-container animate__animated animate__fadeInRight">
            <div className="summary-wrapper">
                <div className="summary-wrapper-col1">
                    <div className="summary-wrapper-col1-r1">
                        <Card props={mockMovie} />
                    </div>
                    <div className="summary-wrapper-col1-r2">
                        <table>
                            <tr>
                                <th colSpan="2" className="bottom-line">Your date</th>
                            </tr>
                            <tr>
                                <td className="bottom-line right-line">Day</td>
                                <td className="bottom-line">Mock day</td>
                            </tr>
                            <tr>
                                <td className="bottom-line right-line">Hour</td>
                                <td className="bottom-line">Mock hour</td>
                            </tr>
                            <tr>
                                <td className="right-line">Venue</td>
                                <td>Mock venue</td>
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
                                    <td>A1, A2, A3, A4</td>
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
                                    <td className="bottom-line">$00.00</td>
                                </tr>
                                <tr>
                                    <td className="right-line">Method</td>
                                    <td>Mock method</td>
                                </tr>
                            </table>
                        </div>
                        <div className="summary-wrapper-col2-wrapper-r3">
                                <button type="submit">Get your tickets!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SummaryPanel
