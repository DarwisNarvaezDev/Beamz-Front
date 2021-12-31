import React, { useEffect, useRef, useState } from 'react'

const PickTime = ({ props }) => {

    const { dispatch } = props;

    const initialState = 'pick-time-input-empty';

    const [fourteenState, setFourteenState] = useState(initialState);
    const [twentytwoState, setTwentytwoState] = useState(initialState);
    const [eighteenState, setEighteenState] = useState(initialState);
    const [oneState, setOneState] = useState(initialState);

    const fourteenRef = useRef(null);
    const twentytwoRef = useRef(null);
    const eighteenRef = useRef(null);
    const oneRef = useRef(null);

    useEffect(() => {

        awaitClasses();

    }, [props])

    const awaitClasses = async () => {

        // fourteenInput
        // eighteenInput
        // twentytwoInput
        // oneInput

        const { fourteenInput, eighteenInput, twentytwoInput, oneInput } = props.state;

        setFourteenState(fourteenInput);
        setTwentytwoState(twentytwoInput);
        setEighteenState(eighteenInput);
        setOneState(oneInput);

    }

    const callReducer = (job, ref) => {

        dispatch({ type: 'DATE_SELECTED', payload: { job, ref } });

    }

    return (
        <div className="pick-time">
            <div className="pick-time-wrapper">
                <div className="pick-time-list">
                    <div className="pick-time-fc">
                        <input type="checkbox" id="14" name="14" value="14" className={fourteenState} onClick={(e) => {
                            callReducer(1, e.target.value);
                        }}></input>
                        <label for="14" onClick={(e) => {
                            callReducer(1, e.target.value);
                        }}>14:00</label>
                    </div>
                    <div className="pick-time-sc">
                        <input type="checkbox" id="18" name="18" value="18" className={eighteenState} onClick={(e) => {
                            callReducer(2, e.target.value);
                        }}></input>
                        <label ref={eighteenRef} for="18" onClick={(e) => {
                            callReducer(2, e.target.value);
                        }}> 18:00</label>
                    </div>
                    <div className="pick-time-tc">
                        <input type="checkbox" id="22" name="22" value="22" className={twentytwoState} onClick={(e) => {
                            callReducer(3, e.target.value);
                        }}></input>
                        <label ref={twentytwoRef} for="twenty-two" value="22" onClick={(e) => {
                            callReducer(3, 22);
                        }}> 22:00</label>
                    </div>
                    <div className="pick-time-fthc">
                        <input type="checkbox" id="one" name="one" value="one" className={oneState} onClick={(e) => {
                            callReducer(4, e.target.value);
                        }}></input>
                        <label ref={oneRef} for="one" onClick={(e) => {
                            callReducer(4, e.target.value);
                        }}> 01:00</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PickTime
