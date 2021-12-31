import React, { useRef, useEffect, useState } from 'react'

const Confirm = ({props}) => {
    
    const confirmRef = useRef(null);

    const { state, dispatch } = props;
    
    return (
        <div className={state.confirmSelected} ref={confirmRef}>
        <a onClick={() => {
            dispatch({ type: 'CONFIRM_CLICK' })
        }} ref={confirmRef}>Movie preferences</a>
    </div>
    )
}

export default Confirm
