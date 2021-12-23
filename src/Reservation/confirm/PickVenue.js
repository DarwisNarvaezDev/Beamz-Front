import React, { useEffect, useRef, useState } from 'react'

const PickVenue = ({ props }) => {

    const { dispatch } = props;

    const [venueSelected, setVenueSelected] = useState('');

    const [palermoStateInputClass, setPalermoStateInputClass] = useState('pick-venue-input');
    const [belgranoStateInputClass, setBelgranoStateInputClass] = useState('pick-venue-input');
    const [nunezStateInputClass, setNunezStateInputClass] = useState('pick-venue-input');

    const palermoRef = useRef(null);
    const belgranoRef = useRef(null);
    const nunezRef = useRef(null);

    const awaitClasses = async() => {

        const {pickVenuePalermoInputClass, pickVenueBelgranoInputClass, pickVenueNunezInputClass} = props.state;

        setPalermoStateInputClass(pickVenuePalermoInputClass);
        setBelgranoStateInputClass(pickVenueBelgranoInputClass);
        setNunezStateInputClass(pickVenueNunezInputClass);

    }

    useEffect(() => {

        awaitClasses();
        if( venueSelected !== '' ){

            console.log(`Venue selected: ${venueSelected}`);
            dispatch({type: 'SET_VENUE_VALUE', payload: venueSelected})
    
        }

    }, [venueSelected])

    return (
        <div className="pick-venue">
            <div className="pick-venue-wrapper">
                <div className="pick-wrapper-fc">
                    <input ref={palermoRef} type="checkbox" id="palermo" name="palermo" value="palermo" className={palermoStateInputClass} onClick={() => {

                        setVenueSelected(palermoRef.current.value)
                        console.log(palermoRef.current.value);

                        dispatch({type: 'PICK_SELECTED', payload: 1})

                    }}></input>
                    <label for="palermo"> Palermo</label>
                </div>
                <div className="pick-wrapper-sc">
                    <input ref={belgranoRef} type="checkbox" id="belgrano" name="belgrano" value="belgrano" className={belgranoStateInputClass} onClick={() => {

                        setVenueSelected(belgranoRef.current.value)
                        console.log(palermoRef.current.value);

                        dispatch({type: 'PICK_SELECTED', payload: 2})


                    }}></input>
                    <label for="belgrano"> Belgrano</label>
                </div>
                <div>
                    <input ref={nunezRef} type="checkbox" id="nunez" name="nunez" value="nunez" className={nunezStateInputClass} onClick={() => {

                        setVenueSelected(nunezRef.current.value)
                        console.log(nunezRef.current.value);

                        dispatch({type: 'PICK_SELECTED', payload: 3})


                    }}></input>
                    <label for="nunez"> Nuñez</label>
                </div>
            </div>
        </div>
    )
}

export default PickVenue
