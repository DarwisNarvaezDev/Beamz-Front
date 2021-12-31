import React, { useEffect, useState } from 'react'

const NotificationsModal = ({ props }) => {

    const [messageState, setMessageState] = useState('Welcome!');
    const [modalClassState, setModalClassState] = useState('reservations-messages animate__animated animate__tada');
    const { state, dispatch } = props;

    const awaitMessage = async () => {

        const { ModalMessage, ModalType } = await state;

        const modalClassBlue = 'reservations-messages animate__animated animate__tada'
        const modalClassGreen = 'reservations-messages-green animate__animated animate__tada'
        const modalClassRed = 'reservations-messages-red animate__animated animate__tada'

        switch (ModalType) {
            case 1:
                setModalClassState(modalClassBlue);
            case 2:
                setModalClassState(modalClassGreen);
            case 3:
                setModalClassState(modalClassRed);
        }

        if( ModalType === 4 ){
            setModalClassState(modalClassGreen);
        }


        setMessageState(ModalMessage);
    }

    useEffect(() => {

        awaitMessage();

    }, [props])

    return (
        <>
            <div key={state.ModalMessage} className={modalClassState}>
                {messageState}
            </div>
        </>
    )
}

export default NotificationsModal
