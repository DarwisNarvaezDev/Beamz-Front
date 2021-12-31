import React, { useEffect, useState } from 'react'

const SectorC = ({ props }) => {

    const initialState = 'seat';

    const { state, dispatch, butacaImg, pushSeatsToArray, removeItemFromArray } = props;

    const [A13StateClass, setA13StateClass] = useState(initialState);
    const [B13StateClass, setB13StateClass] = useState(initialState);
    const [B14StateClass, setB14StateClass] = useState(initialState);
    const [C14StateClass, setC14StateClass] = useState(initialState);
    const [C15StateClass, setC15StateClass] = useState(initialState);
    const [C16StateClass, setC16StateClass] = useState(initialState);
    const [D15StateClass, setD15StateClass] = useState(initialState);
    const [D16StateClass, setD16StateClass] = useState(initialState);
    const [D17StateClass, setD17StateClass] = useState(initialState);
    const [D18StateClass, setD18StateClass] = useState(initialState);
    const [E16StateClass, setE16StateClass] = useState(initialState);
    const [E17StateClass, setE17StateClass] = useState(initialState);
    const [E18StateClass, setE18StateClass] = useState(initialState);
    const [E19StateClass, setE19StateClass] = useState(initialState);
    const [E20StateClass, setE20StateClass] = useState(initialState);
    const [F18StateClass, setF18StateClass] = useState(initialState);
    const [F19StateClass, setF19StateClass] = useState(initialState);
    const [F20StateClass, setF20StateClass] = useState(initialState);
    const [F21StateClass, setF21StateClass] = useState(initialState);
    const [F22StateClass, setF22StateClass] = useState(initialState);
    const [F23StateClass, setF23StateClass] = useState(initialState);
    const [G17StateClass, setG17StateClass] = useState(initialState);
    const [G18StateClass, setG18StateClass] = useState(initialState);
    const [G19StateClass, setG19StateClass] = useState(initialState);
    const [G20StateClass, setG20StateClass] = useState(initialState);
    const [G21StateClass, setG21StateClass] = useState(initialState);
    const [G22StateClass, setG22StateClass] = useState(initialState);
    const [H18StateClass, setH18StateClass] = useState(initialState);
    const [H19StateClass, setH19StateClass] = useState(initialState);
    const [H20StateClass, setH20StateClass] = useState(initialState);
    const [H21StateClass, setH21StateClass] = useState(initialState);
    const [H22StateClass, setH22StateClass] = useState(initialState);
    const [H23StateClass, setH23StateClass] = useState(initialState);
    const [H24StateClass, setH24StateClass] = useState(initialState);

    const doSectorMap = () => {

        const sectorMap = new Map();
            sectorMap.set('a13', setA13StateClass);
            sectorMap.set('b13', setB13StateClass);
            sectorMap.set('b14', setB14StateClass);
            sectorMap.set('c14', setC14StateClass);
            sectorMap.set('c15', setC15StateClass);
            sectorMap.set('c16', setC16StateClass);
            sectorMap.set('d15', setD15StateClass);
            sectorMap.set('d16', setD16StateClass);
            sectorMap.set('d17', setD17StateClass);
            sectorMap.set('d18', setD18StateClass);
            sectorMap.set('e16', setE16StateClass);
            sectorMap.set('e17', setE17StateClass);
            sectorMap.set('e18', setE18StateClass);
            sectorMap.set('e19', setE19StateClass);
            sectorMap.set('e20', setE20StateClass);
            sectorMap.set('f18', setF18StateClass);
            sectorMap.set('f19', setF19StateClass);
            sectorMap.set('f20', setF20StateClass);
            sectorMap.set('f21', setF21StateClass);
            sectorMap.set('f22', setF22StateClass);
            sectorMap.set('g17', setG17StateClass);
            sectorMap.set('g18', setG18StateClass);
            sectorMap.set('g19', setG19StateClass);
            sectorMap.set('g20', setG20StateClass);
            sectorMap.set('g21', setG21StateClass);
            sectorMap.set('g22', setG22StateClass);
            sectorMap.set('h18', setH18StateClass);
            sectorMap.set('h19', setH19StateClass);
            sectorMap.set('h20', setH20StateClass);
            sectorMap.set('h21', setH21StateClass);
            sectorMap.set('h22', setH22StateClass);
            sectorMap.set('h23', setH23StateClass);
            sectorMap.set('h24', setH24StateClass);

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

        awaitClasses();

    }, [props])

    return (
        <div className="wrapper-section wrapper-col4">
            <div className="sectorc-arow-wrapper">
                <div className="sectorc-arow-row">
                    <div className={A13StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>a13</div>
                </div>
            </div>
            <div className="sectorc-brow-wrapper">
                <div className="sectorc-brow-row">
                    <div className={B13StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>b13</div>
                    <div className={B14StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>b14</div>
                </div>
            </div>
            <div className="sectorc-crow-wrapper">
                <div className="sectorc-crow-row">
                    <div className={C14StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>c14</div>
                    <div className={C15StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>c15</div>
                    <div className={C16StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>c16</div>
                </div>
            </div>
            <div className="sectorc-drow-wrapper">
                <div className="sectorc-drow-row">
                    <div className={D15StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>d15</div>
                    <div className={D16StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>d16</div>
                    <div className={D17StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>d17</div>
                    <div className={D18StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>d18</div>
                </div>
            </div>
            <div className="sectorc-erow-wrapper">
                <div className="sectorc-erow-row">
                    <div className={E16StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>e16</div>
                    <div className={E17StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>e17</div>
                    <div className={E18StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>e18</div>
                    <div className={E19StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>e19</div>
                    <div className={E20StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>e20</div>

                </div>
            </div>
            <div className="sectorc-frow-wrapper">
                <div className="sectorc-frow-row">
                    <div className={F18StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>f18</div>
                    <div className={F19StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>f19</div>
                    <div className={F20StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>f20</div>
                    <div className={F21StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>f21</div>
                    <div className={F22StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>f22</div>
                    <div className={F23StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>f23</div>

                </div>
            </div>
            <div className="sectorc-grow-wrapper">
                <div className="sectorc-grow-row">
                    <div className={G17StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>g17</div>
                    <div className={G18StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>g18</div>
                    <div className={G19StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>g19</div>
                    <div className={G20StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>g20</div>
                    <div className={G21StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>g21</div>
                    <div className={G22StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>g22</div>
                </div>
            </div>
            <div className="sectorc-hrow-wrapper">
                <div className="sectorc-hrow-row">
                    <div className={H18StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>h18</div>
                    <div className={H19StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>h19</div>
                    <div className={H20StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>h20</div>
                    <div className={H21StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>h21</div>
                    <div className={H22StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>h22</div>
                    <div className={H23StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>h23</div>
                    <div className={H24StateClass} style={{ backgroundImage: `url(${butacaImg})` }} onClick={(e) => { clickOnSeat(e) }}>h24</div>

                </div>
            </div>
        </div>
    )
}

export default SectorC
