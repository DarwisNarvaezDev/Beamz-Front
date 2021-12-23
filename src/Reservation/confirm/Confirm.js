import React, { useRef, useEffect } from 'react'

const Confirm = ({props}) => {
    
    const confirmRef = useRef(null);

    const { state, dispatch } = props;

    useEffect(() => {
        
        confirmRef.current.click();
        setTimeout(() => {
            dispatch({type: 'MODAL_CONFIRM_MESSAGE', payload: 'Please confirm your movie preferences...'})
        }, 4000)
        
    }, [])
    
    return (
        <div className={state.confirmSelected}>
        <a onClick={() => {
            dispatch({ type: 'CONFIRM_CLICK' })
        }} ref={confirmRef}>Movie preferences</a>
    </div>
    )
}

export default Confirm
