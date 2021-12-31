import React, { useState, useEffect } from 'react'

const SectorA = ({ props }) => {

    const initialState = 'seat';

    const { state, dispatch, butacaImg, pushSeatsToArray, removeItemFromArray } = props;

    const [A1SeatClass, setA1SeatClass] = useState(initialState);

    const [B1SeatClass, setB1SeatClass] = useState(initialState);
    const [B2SeatClass, setB2SeatClass] = useState(initialState);

    const [C1SeatClass, setC1SeatClass] = useState(initialState);
    const [C2SeatClass, setC2SeatClass] = useState(initialState);
    const [C3SeatClass, setC3SeatClass] = useState(initialState);

    const [D1SeatClass, setD1SeatClass] = useState(initialState);
    const [D2SeatClass, setD2SeatClass] = useState(initialState);
    const [D3SeatClass, setD3SeatClass] = useState(initialState);
    const [D4SeatClass, setD4SeatClass] = useState(initialState);

    const [E1StateClass, setE1StateClass] = useState(initialState);
    const [E2StateClass, setE2StateClass] = useState(initialState);
    const [E3StateClass, setE3StateClass] = useState(initialState);
    const [E4StateClass, setE4StateClass] = useState(initialState);
    const [E5StateClass, setE5StateClass] = useState(initialState);

    const [F1StateClass, setF1StateClass] = useState(initialState);
    const [F2StateClass, setF2StateClass] = useState(initialState);
    const [F3StateClass, setF3StateClass] = useState(initialState);
    const [F4StateClass, setF4StateClass] = useState(initialState);
    const [F5StateClass, setF5StateClass] = useState(initialState);
    const [F6StateClass, setF6StateClass] = useState(initialState);

    const [G1StateClass, setG1StateClass] = useState(initialState);
    const [G2StateClass, setG2StateClass] = useState(initialState);
    const [G3StateClass, setG3StateClass] = useState(initialState);
    const [G4StateClass, setG4StateClass] = useState(initialState);
    const [G5StateClass, setG5StateClass] = useState(initialState);
    const [G6StateClass, setG6StateClass] = useState(initialState);

    const [H1StateClass, setH1StateClass] = useState(initialState);
    const [H2StateClass, setH2StateClass] = useState(initialState);
    const [H3StateClass, setH3StateClass] = useState(initialState);
    const [H4StateClass, setH4StateClass] = useState(initialState);
    const [H5StateClass, setH5StateClass] = useState(initialState);
    const [H6StateClass, setH6StateClass] = useState(initialState);
    const [H7StateClass, setH7StateClass] = useState(initialState);

    const doSectorMap = () => {

        let sectorMap = new Map();
        sectorMap.set('a1', setA1SeatClass);
        sectorMap.set('b1', setB1SeatClass);
        sectorMap.set('b2', setB2SeatClass);
        sectorMap.set('c1', setC1SeatClass);
        sectorMap.set('c2', setC2SeatClass);
        sectorMap.set('c3', setC3SeatClass);
        sectorMap.set('d1', setD1SeatClass);
        sectorMap.set('d2', setD2SeatClass);
        sectorMap.set('d3', setD3SeatClass);
        sectorMap.set('d4', setD4SeatClass);
        sectorMap.set('e1', setE1StateClass);
        sectorMap.set('e2', setE2StateClass);
        sectorMap.set('e3', setE3StateClass);
        sectorMap.set('e4', setE4StateClass);
        sectorMap.set('e5', setE5StateClass);
        sectorMap.set('f1', setF1StateClass);
        sectorMap.set('f2', setF2StateClass);
        sectorMap.set('f3', setF3StateClass);
        sectorMap.set('f4', setF4StateClass);
        sectorMap.set('f5', setF5StateClass);
        sectorMap.set('f6', setF6StateClass);
        sectorMap.set('g1', setG1StateClass);
        sectorMap.set('g2', setG2StateClass);
        sectorMap.set('g3', setG3StateClass);
        sectorMap.set('g4', setG4StateClass);
        sectorMap.set('g5', setG5StateClass);
        sectorMap.set('g6', setG6StateClass);
        sectorMap.set('h1', setH1StateClass);
        sectorMap.set('h2', setH2StateClass);
        sectorMap.set('h3', setH3StateClass);
        sectorMap.set('h4', setH4StateClass);
        sectorMap.set('h5', setH5StateClass);
        sectorMap.set('h6', setH6StateClass);
        sectorMap.set('h7', setH7StateClass);

        return sectorMap;

    }

    const awaitClasses = async () => {

        const sectorMap = doSectorMap();
        const seatsMap = await state.seats;

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

        //llamar una función que haga un map local con todos los useStates
        awaitClasses();

    }, [props])

    return (
        <div className="wrapper-section wrapper-col2">
            <div className="a-row row-prop">
                <div className="a-row-wrapper">
                    <div className={A1SeatClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>a1</div>
                </div>
            </div>
            <div className="b-row row-prop">
                <div className="b-row-wrapper">
                    <div className={B2SeatClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>b2</div>
                    <div className={B1SeatClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>b1</div>

                </div>
            </div>
            <div className="c-row row-prop">
                <div className="c-row-wrapper">
                    <div className={C3SeatClass} alt="c3" style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>c3</div>
                    <div className={C2SeatClass} alt="c2" style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>c2</div>
                    <div className={C1SeatClass} alt="c1" style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>c1</div>
                </div>
            </div>
            <div className="d-row row-prop">
                <div className="d-row-wrapper">
                    <div className={D4SeatClass} alt="d4" style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>d4</div>
                    <div className={D3SeatClass} alt="d3" style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>d3</div>
                    <div className={D2SeatClass} alt="d2" style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>d2</div>
                    <div className={D1SeatClass} alt="d1" style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>d1</div>
                </div>
            </div>
            <div className="e-row row-prop">
                <div className="e-row-wrapper">
                    <div className={E5StateClass} alt="e5" style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>e5</div>
                    <div className={E4StateClass} alt="e4" style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>e4</div>
                    <div className={E3StateClass} alt="e3" style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>e3</div>
                    <div className={E2StateClass} alt="e2" style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>e2</div>
                    <div className={E1StateClass} alt="e1" style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>e1</div>
                </div>
            </div>
            <div className="f-row row-prop">
                <div className="f-row-wrapper">
                    <div className={F6StateClass} alt="f6" style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>f6</div>
                    <div className={F5StateClass} alt="f5" style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>f5</div>
                    <div className={F4StateClass} alt="f4" style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>f4</div>
                    <div className={F3StateClass} alt="f3" style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>f3</div>
                    <div className={F2StateClass} alt="f2" style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>f2</div>
                    <div className={F1StateClass} alt="f1" style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>f1</div>

                </div>
            </div>
            <div className="g-row row-prop">
                <div className="g-row-wrapper">
                    <div className={G6StateClass} alt="g6" style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>g6</div>
                    <div className={G5StateClass} alt="g5" style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>g5</div>
                    <div className={G4StateClass} alt="g4" style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>g4</div>
                    <div className={G3StateClass} alt="g3" style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>g3</div>
                    <div className={G2StateClass} alt="g2" style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>g2</div>
                    <div className={G1StateClass} alt="g1" style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>g1</div>

                </div>
            </div>
            <div className="h-row row-prop">
                <div className="h-row-wrapper">
                    <div className={H7StateClass} alt="h7" style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>h7</div>
                    <div className={H6StateClass} alt="h6" style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>h6</div>
                    <div className={H5StateClass} alt="h5" style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>h5</div>
                    <div className={H4StateClass} alt="h4" style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>h4</div>
                    <div className={H3StateClass} alt="h3" style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>h3</div>
                    <div className={H2StateClass} alt="h2" style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>h2</div>
                    <div className={H1StateClass} alt="h1" style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>h1</div>

                </div>
            </div>
        </div>
    )
}

export default SectorA
