import React from 'react'

const Confirm = ({props}) => {
    
    const { state, dispatch } = props
    
    return (
        <div className={state.confirmSelected}>
        <a onClick={() => {
            dispatch({ type: 'CONFIRM_CLICK' })
        }}>Movie preferences</a>
    </div>
    )
}

export default Confirm
