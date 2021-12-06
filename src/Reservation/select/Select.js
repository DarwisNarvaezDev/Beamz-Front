import React from 'react'

const Select = ({props}) => {
    
    const {state, dispatch} = props
    
    return (
        <div className={state.selectSelected}>
        <div>
            <a onClick={() => {
                dispatch({type: 'SELECT_CLICK'})
            }}>Seats selection</a>
        </div>
    </div>
    )
}

export default Select
