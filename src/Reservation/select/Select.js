import React, { useEffect, useRef, useState } from 'react'

const Select = ({props}) => {
    
    const { state, dispatch } = props;

    const selectRef = useRef(null);

    return (
        <div className={state.selectSelected} ref={selectRef}>
        <div>
            <a onClick={() => {
                dispatch({type: 'SELECT_CLICK'})
            }}>Seats selection</a>
        </div>
    </div>
    )
}

export default Select
