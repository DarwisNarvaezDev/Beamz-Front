import React, { useEffect, useState } from 'react'

const SectorB = ({ props }) => {

    const initialState = 'seat';

    const { state, dispatch, butacaImg, pushSeatsToArray, removeItemFromArray } = props;

    const [A2StateClass, setA2StateClass] = useState(initialState);
    const [A3StateClass, setA3StateClass] = useState(initialState);
    const [A4StateClass, setA4StateClass] = useState(initialState);
    const [A5StateClass, setA5StateClass] = useState(initialState);
    const [A6StateClass, setA6StateClass] = useState(initialState);
    const [A7StateClass, setA7StateClass] = useState(initialState);
    const [A8StateClass, setA8StateClass] = useState(initialState);
    const [A9StateClass, setA9StateClass] = useState(initialState);
    const [A10StateClass, setA10StateClass] = useState(initialState);
    const [A11StateClass, setA11StateClass] = useState(initialState);

    const [B3StateClass, setB3StateClass] = useState(initialState);
    const [B4StateClass, setB4StateClass] = useState(initialState);
    const [B5StateClass, setB5StateClass] = useState(initialState);
    const [B6StateClass, setB6StateClass] = useState(initialState);
    const [B7StateClass, setB7StateClass] = useState(initialState);
    const [B8StateClass, setB8StateClass] = useState(initialState);
    const [B9StateClass, setB9StateClass] = useState(initialState);
    const [B10StateClass, setB10StateClass] = useState(initialState);
    const [B11StateClass, setB11StateClass] = useState(initialState);
    const [B12StateClass, setB12StateClass] = useState(initialState);

    const [C4StateClass, setC4StateClass] = useState(initialState);
    const [C5StateClass, setC5StateClass] = useState(initialState);
    const [C6StateClass, setC6StateClass] = useState(initialState);
    const [C7StateClass, setC7StateClass] = useState(initialState);
    const [C8StateClass, setC8StateClass] = useState(initialState);
    const [C9StateClass, setC9StateClass] = useState(initialState);
    const [C10StateClass, setC10StateClass] = useState(initialState);
    const [C11StateClass, setC11StateClass] = useState(initialState);
    const [C12StateClass, setC12StateClass] = useState(initialState);
    const [C13StateClass, setC13StateClass] = useState(initialState);

    const [D5StateClass, setD5StateClass] = useState(initialState);
    const [D6StateClass, setD6StateClass] = useState(initialState);
    const [D7StateClass, setD7StateClass] = useState(initialState);
    const [D8StateClass, setD8StateClass] = useState(initialState);
    const [D9StateClass, setD9StateClass] = useState(initialState);
    const [D10StateClass, setD10StateClass] = useState(initialState);
    const [D11StateClass, setD11StateClass] = useState(initialState);
    const [D12StateClass, setD12StateClass] = useState(initialState);
    const [D13StateClass, setD13StateClass] = useState(initialState);
    const [D14StateClass, setD14StateClass] = useState(initialState);

    const [E6StateClass, setE6StateClass] = useState(initialState);
    const [E7StateClass, setE7StateClass] = useState(initialState);
    const [E8StateClass, setE8StateClass] = useState(initialState);
    const [E9StateClass, setE9StateClass] = useState(initialState);
    const [E10StateClass, setE10StateClass] = useState(initialState);
    const [E11StateClass, setE11StateClass] = useState(initialState);
    const [E12StateClass, setE12StateClass] = useState(initialState);
    const [E13StateClass, setE13StateClass] = useState(initialState);
    const [E14StateClass, setE14StateClass] = useState(initialState);
    const [E15StateClass, setE15StateClass] = useState(initialState);

    const [F8StateClass, setF8StateClass] = useState(initialState);
    const [F9StateClass, setF9StateClass] = useState(initialState);
    const [F10StateClass, setF10StateClass] = useState(initialState);
    const [F11StateClass, setF11StateClass] = useState(initialState);
    const [F12StateClass, setF12StateClass] = useState(initialState);
    const [F13StateClass, setF13StateClass] = useState(initialState);
    const [F14StateClass, setF14StateClass] = useState(initialState);
    const [F15StateClass, setF15StateClass] = useState(initialState);
    const [F16StateClass, setF16StateClass] = useState(initialState);
    const [F17StateClass, setF17StateClass] = useState(initialState);

    const [G7StateClass, setG7StateClass] = useState(initialState);
    const [G8StateClass, setG8StateClass] = useState(initialState);
    const [G9StateClass, setG9StateClass] = useState(initialState);
    const [G10StateClass, setG10StateClass] = useState(initialState);
    const [G11StateClass, setG11StateClass] = useState(initialState);
    const [G12StateClass, setG12StateClass] = useState(initialState);
    const [G13StateClass, setG13StateClass] = useState(initialState);
    const [G14StateClass, setG14StateClass] = useState(initialState);
    const [G15StateClass, setG15StateClass] = useState(initialState);
    const [G16StateClass, setG16StateClass] = useState(initialState);

    const [H8StateClass, setH8StateClass] = useState(initialState);
    const [H9StateClass, setH9StateClass] = useState(initialState);
    const [H10StateClass, setH10StateClass] = useState(initialState);
    const [H11StateClass, setH11StateClass] = useState(initialState);
    const [H12StateClass, setH12StateClass] = useState(initialState);
    const [H13StateClass, setH13StateClass] = useState(initialState);
    const [H14StateClass, setH14StateClass] = useState(initialState);
    const [H15StateClass, setH15StateClass] = useState(initialState);
    const [H16StateClass, setH16StateClass] = useState(initialState);
    const [H17StateClass, setH17StateClass] = useState(initialState);

    const doSectorMap = () => {

        const sectorMap = new Map();
            sectorMap.set('a2', setA2StateClass);
            sectorMap.set('a3', setA3StateClass);
            sectorMap.set('a4', setA4StateClass);
            sectorMap.set('a5', setA5StateClass);
            sectorMap.set('a6', setA6StateClass);
            sectorMap.set('a7', setA7StateClass);
            sectorMap.set('a8', setA8StateClass);
            sectorMap.set('a9', setA9StateClass);
            sectorMap.set('a10', setA10StateClass);
            sectorMap.set('a11', setA11StateClass);
            sectorMap.set('b3', setB3StateClass);
            sectorMap.set('b4', setB4StateClass);
            sectorMap.set('b5', setB5StateClass);
            sectorMap.set('b6', setB6StateClass);
            sectorMap.set('b7', setB7StateClass);
            sectorMap.set('b8', setB8StateClass);
            sectorMap.set('b9', setB9StateClass);
            sectorMap.set('b10', setB10StateClass);
            sectorMap.set('b11', setB11StateClass);
            sectorMap.set('b12', setB12StateClass);
            sectorMap.set('c4', setC4StateClass);
            sectorMap.set('c5', setC5StateClass);
            sectorMap.set('c6', setC6StateClass);
            sectorMap.set('c7', setC7StateClass);
            sectorMap.set('c8', setC8StateClass);
            sectorMap.set('c9', setC9StateClass);
            sectorMap.set('c10', setC10StateClass);
            sectorMap.set('c11', setC11StateClass);
            sectorMap.set('c12', setC12StateClass);
            sectorMap.set('c13', setC13StateClass);
            sectorMap.set('d5', setD5StateClass);
            sectorMap.set('d6', setD6StateClass);
            sectorMap.set('d7', setD7StateClass);
            sectorMap.set('d8', setD8StateClass);
            sectorMap.set('d9', setD9StateClass);
            sectorMap.set('d10', setD10StateClass);
            sectorMap.set('d11', setD11StateClass);
            sectorMap.set('d12', setD12StateClass);
            sectorMap.set('d13', setD13StateClass);
            sectorMap.set('d14', setD14StateClass);
            sectorMap.set('e6', setE6StateClass);
            sectorMap.set('e7', setE7StateClass);
            sectorMap.set('e8', setE8StateClass);
            sectorMap.set('e9', setE9StateClass);
            sectorMap.set('e10', setE10StateClass);
            sectorMap.set('e11', setE11StateClass);
            sectorMap.set('e12', setE12StateClass);
            sectorMap.set('e13', setE13StateClass);
            sectorMap.set('e14', setE14StateClass);
            sectorMap.set('e15', setE15StateClass);
            sectorMap.set('f8', setF8StateClass);
            sectorMap.set('f9', setF9StateClass);
            sectorMap.set('f10', setF10StateClass);
            sectorMap.set('f11', setF11StateClass);
            sectorMap.set('f12', setF12StateClass);
            sectorMap.set('f13', setF13StateClass);
            sectorMap.set('f14', setF14StateClass);
            sectorMap.set('f15', setF15StateClass);
            sectorMap.set('f16', setF16StateClass);
            sectorMap.set('f17', setF17StateClass);
            sectorMap.set('g7', setG7StateClass);
            sectorMap.set('g8', setG8StateClass);
            sectorMap.set('g9', setG9StateClass);
            sectorMap.set('g10', setG10StateClass);
            sectorMap.set('g11', setG11StateClass);
            sectorMap.set('g12', setG12StateClass);
            sectorMap.set('g13', setG13StateClass);
            sectorMap.set('g14', setG14StateClass);
            sectorMap.set('g15', setG15StateClass);
            sectorMap.set('g16', setG16StateClass);
            sectorMap.set('h8', setH8StateClass);
            sectorMap.set('h9', setH9StateClass);
            sectorMap.set('h10', setH10StateClass);
            sectorMap.set('h11', setH11StateClass);
            sectorMap.set('h12', setH12StateClass);
            sectorMap.set('h13', setH13StateClass);
            sectorMap.set('h14', setH14StateClass);
            sectorMap.set('h15', setH15StateClass);
            sectorMap.set('h16', setH16StateClass);
            sectorMap.set('h17', setH17StateClass);

        return sectorMap;

    }

    const awaitClasses = async () => {

        //mapear el sector map con el map del reducer para hacer los setStates
        const sectorMap = doSectorMap();
        const seatsMap = await state.seats

        for (let [keyState, valueState] of sectorMap) {
            for (let [keyReducer, valueReducer] of seatsMap) {
                if (keyState === keyReducer) {
                    valueState(valueReducer);
                }
            }
        }

    }

    const clickOnSeat = (e) => {

        //Getting the value of the seat selected
        const seatSelected = e.currentTarget.textContent;

        if( e.target.className === 'seat' ){
            dispatch({type: 'SEAT_SELECTED', payload: seatSelected});
            e.target.className = 'seat-selected';
            pushSeatsToArray(seatSelected);
        }else{
            dispatch({type: 'SEAT_DESELECTED', payload: seatSelected})
            e.target.className = 'seat';
            removeItemFromArray(seatSelected);
        }

    }

    useEffect(() => {

        awaitClasses();

    }, [props])

    return (
        <div className="wrapper-section wrapper-col3">
            <div className="sectorb-arow-wrapper">
                <div className="sectorb-arow-row">
                    <div className={A2StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>a2</div>
                    <div className={A3StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>a3</div>
                    <div className={A4StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>a4</div>
                    <div className={A5StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>a5</div>
                    <div className={A6StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>a6</div>
                    <div className={A7StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>a7</div>
                    <div className={A8StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>a8</div>
                    <div className={A9StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>a9</div>
                    <div className={A10StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>a10</div>
                    <div className={A11StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>a11</div>

                </div>
            </div>
            <div className="sectorb-brow-wrapper">
                <div className="sectorb-brow-row">
                    <div className={B3StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>b3</div>
                    <div className={B4StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>b4</div>
                    <div className={B5StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>b5</div>
                    <div className={B6StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>b6</div>
                    <div className={B7StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>b7</div>
                    <div className={B8StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>b8</div>
                    <div className={B9StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>b9</div>
                    <div className={B10StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>b10</div>
                    <div className={B11StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>b11</div>
                    <div className={B12StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>b12</div>

                </div>
            </div>
            <div className="sectorb-crow-wrapper">
                <div className="sectorb-crow-row">
                    <div className={C4StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>c4</div>
                    <div className={C5StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>c5</div>
                    <div className={C6StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>c6</div>
                    <div className={C7StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>c7</div>
                    <div className={C8StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>c8</div>
                    <div className={C9StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>c9</div>
                    <div className={C10StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>c10</div>
                    <div className={C11StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>c11</div>
                    <div className={C12StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>c12</div>
                    <div className={C13StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>c13</div>

                </div>
            </div>
            <div className="sectorb-drow-wrapper">
                <div className="sectorb-drow-row">
                    <div className={D5StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>d5</div>
                    <div className={D6StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>d6</div>
                    <div className={D7StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>d7</div>
                    <div className={D8StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>d8</div>
                    <div className={D9StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>d9</div>
                    <div className={D10StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>d10</div>
                    <div className={D11StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>d11</div>
                    <div className={D12StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>d12</div>
                    <div className={D13StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>d13</div>
                    <div className={D14StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>d14</div>

                </div>
            </div>
            <div className="sectorb-erow-wrapper">
                <div className="sectorb-erow-row">
                    <div className={E6StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>e6</div>
                    <div className={E7StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>e7</div>
                    <div className={E8StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>e8</div>
                    <div className={E9StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>e9</div>
                    <div className={E10StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>e10</div>
                    <div className={E11StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>e11</div>
                    <div className={E12StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>e12</div>
                    <div className={E13StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>e13</div>
                    <div className={E14StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>e14</div>
                    <div className={E15StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>e15</div>


                </div>
            </div>
            <div className="sectorb-frow-wrapper">
                <div className="sectorb-frow-row">
                    <div className={F8StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>f8</div>
                    <div className={F9StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>f9</div>
                    <div className={F10StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>f10</div>
                    <div className={F11StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>f11</div>
                    <div className={F12StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>f12</div>
                    <div className={F13StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>f13</div>
                    <div className={F14StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>f14</div>
                    <div className={F15StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>f15</div>
                    <div className={F16StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>f16</div>
                    <div className={F17StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>f17</div>

                </div>
            </div>
            <div className="sectorb-grow-wrapper">
                <div className="sectorb-grow-row">
                    <div className={G7StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>g7</div>
                    <div className={G8StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>g8</div>
                    <div className={G9StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>g9</div>
                    <div className={G10StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>g10</div>
                    <div className={G11StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>g11</div>
                    <div className={G12StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>g12</div>
                    <div className={G13StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>g13</div>
                    <div className={G14StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>g14</div>
                    <div className={G15StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>g15</div>
                    <div className={G16StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>g16</div>

                </div>
            </div>
            <div className="sectorb-hrow-wrapper">
                <div className="sectorb-hrow-row">
                    <div className={H8StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>h8</div>
                    <div className={H9StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>h9</div>
                    <div className={H10StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>h10</div>
                    <div className={H11StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>h11</div>
                    <div className={H12StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>h12</div>
                    <div className={H13StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>h13</div>
                    <div className={H14StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>h14</div>
                    <div className={H15StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>h15</div>
                    <div className={H16StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>h16</div>
                    <div className={H17StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>h17</div>

                </div>
            </div>
        </div>
    )
}

export default SectorB
