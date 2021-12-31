import React, {useRef} from 'react'

const PickDay = ({props}) => {
    
    const { state, dispatch } = props;
    const selectRef = useRef(null);
    
    return (
        <div className="pick-day-wrapper">
            <select ref={selectRef} onChange={(e) => {

                console.log(e.target.value);
                const daySelected = e.target.value;
                dispatch({type: 'DAY_SELECTED', payload: daySelected})

            }}>
                <option value="select" disabled selected>Select</option>
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="thursday">Thursday</option>
                <option value="friday">Friday</option>
                <option value="saturday">Saturday</option>
                <option value="sunday">Sunday</option>
            </select>
        </div>
    )
}

export default PickDay
