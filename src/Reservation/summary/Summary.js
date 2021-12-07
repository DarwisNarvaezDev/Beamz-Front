import React from 'react'

const Summary = ({props}) => {
    
    const {state, dispatch} = props

    return (
        <div className={state.summarySelected}>
            <a onClick={() => {
                dispatch({ type: "SUMMARY_CLICK" })
            }}>Summary</a>
        </div>
    )
}

export default Summary
