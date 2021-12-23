import React, {useEffect, useState} from 'react'

const NotificationsModal = ({props}) => {
    
    const [messageState, setMessageState]  = useState('Welcome!')
    const { state, dispatch } = props;
    
    const awaitMessage = async() => {

        const message = await state.ModalMessage;
        setMessageState(message);

    }

    useEffect(() => {
        
        awaitMessage();

    }, [props])

    return (
        <>
            <div key={state.ModalMessage} className="reservations-messages animate__animated animate__tada">
                {messageState}
            </div>
        </>
    )
}

export default NotificationsModal
