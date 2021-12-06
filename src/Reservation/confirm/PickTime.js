import React from 'react'

const PickTime = () => {
    return (
        <div className="pick-time">
            <div className="pick-time-wrapper">
                <div className="pick-time-list">
                    <div className="pick-time-fc">
                        <input type="checkbox" id="14" name="14" value="14" className="pick-time-input"></input>
                        <label for="14"> 14:00</label>
                    </div>
                    <div className="pick-time-sc">
                        <input type="checkbox" id="18" name="18" value="18" className="pick-time-input"></input>
                        <label for="18"> 18:00</label>
                    </div>
                    <div className="pick-time-tc">
                        <input type="checkbox" id="22" name="22" value="22" className="pick-time-input"></input>
                        <label for="twenty-two"> 22:00</label>
                    </div>
                    <div className="pick-time-fthc">
                        <input type="checkbox" id="one" name="one" value="one" className="pick-time-input"></input>
                        <label for="one"> 01:00</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PickTime
