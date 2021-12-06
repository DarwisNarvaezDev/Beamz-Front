import React from 'react'

const GetButton = ({props}) => {

    const { getSelected, setConfirmSelected, setSelectSelected, setGetSelected } = props

    return (
        <div className="div-seleccionado-big">
            <a className={getSelected}>Get your tickets!</a>
        </div>
    )
}

export default GetButton
