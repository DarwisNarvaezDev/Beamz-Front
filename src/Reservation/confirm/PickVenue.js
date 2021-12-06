import React from 'react'

const PickVenue = () => {
    return (
        <div className="pick-venue">
            <div className="pick-venue-wrapper">
                <div className="pick-wrapper-fc">
                    <input type="checkbox" id="palermo" name="palermo" value="palermo" className="pick-venue-input"></input>
                    <label for="palermo"> Palermo</label>
                </div>
                <div className="pick-wrapper-sc">
                    <input type="checkbox" id="belgrano" name="belgrano" value="belgrano" className="pick-venue-input"></input>
                    <label for="belgrano"> Belgrano</label>
                </div>
                <div>
                    <input type="checkbox" id="nunez" name="nunez" value="nunez" className="pick-venue-input"></input>
                    <label for="belgrano"> Nuñez</label>
                </div>
            </div>
        </div>
    )
}

export default PickVenue
