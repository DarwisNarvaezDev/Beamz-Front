export const ReservationReducer = (state, action) => {

    // confirmSelected: 'confirm-div',
    // showConfirmPanel: false,
    // selectSelected: 'select-div',
    // showSelectPanel: false,
    // paymentSelected: 'payment-div',
    // showPaymentPanel: false,
    // summarySelected: 'summary-div',
    // showSummary: false, 
    // getSelected: 'get-div',
    // showGetButton: false

    if (action.type === 'CONFIRM_CLICK') {

        return {
            ...state,
            confirmSelected: 'div-seleccionado',
            showConfirmPanel: true,
            selectSelected: 'select-div',
            showSelectPanel: false,
            paymentSelected: 'payment-div',
            showPaymentPanel: false,
            summarySelected: 'summary-div',
            showSummary: false
        }

    }

    if (action.type === 'SELECT_CLICK') {

        return {
            ...state,
            confirmSelected: 'confirm-div',
            showConfirmPanel: false,
            selectSelected: 'div-seleccionado-small',
            showSelectPanel: true,
            paymentSelected: 'payment-div',
            showPaymentPanel: false,
            summarySelected: 'summary-div',
            showSummary: false
        }

    }

    if (action.type === 'PAYMENT_CLICK') {

        return {
            ...state,
            confirmSelected: 'confirm-div',
            showConfirmPanel: false,
            selectSelected: 'select-div',
            showSelectPanel: false,
            paymentSelected: 'div-seleccionado-small',
            showPaymentPanel: true,
            summarySelected: 'summary-div',
            showSummary: false
        }

    }

    if (action.type === 'SUMMARY_CLICK') {

        return {
            ...state,
            confirmSelected: 'confirm-div',
            showConfirmPanel: false,
            selectSelected: 'select-div',
            showSelectPanel: false,
            paymentSelected: 'payment-div',
            showPaymentPanel: false,
            summarySelected: 'div-seleccionado-small',
            showSummary: true
        }

    }

    //Reservation panels forms
    if (action.type === 'SET_VENUE_VALUE') {

        console.log(action.payload);
        const venue = action.payload;

        return {
            ...state,
            venue: venue,
        }

    }

    //Styles
    /* Vacio */
    const claseSeleccionada = 'pick-venue-input';
    const claseNoSeleccionada = 'pick-venue-input-empty';
    /* Lleno */
    // .pick-venue-input-empty  

    if (action.type === 'PICK_SELECTED') {

        const pickSelected = action.payload;

        switch (pickSelected) {
            case 1:
                return {
                    ...state,
                    pickVenuePalermoInputClass: claseSeleccionada,
                    pickVenueBelgranoInputClass: claseNoSeleccionada,
                    pickVenueNunezInputClass: claseNoSeleccionada
                }
            case 2:
                return {
                    ...state,
                    pickVenuePalermoInputClass: claseNoSeleccionada,
                    pickVenueBelgranoInputClass: claseSeleccionada,
                    pickVenueNunezInputClass: claseNoSeleccionada
                }
            case 3:
                return {
                    ...state,
                    pickVenuePalermoInputClass: claseNoSeleccionada,
                    pickVenueBelgranoInputClass: claseNoSeleccionada,
                    pickVenueNunezInputClass: claseSeleccionada
                }
            default:
                throw new Error(' Must pass an option to the reducer. ')
        }


    }

    //Notifications modal actions
    if (action.type === 'MODAL_CONFIRM_MESSAGE') {

        const messageToShow = action.payload;

        return {
            ...state,
            ModalMessage: messageToShow
        }

    }

    throw new Error("No action passed");

}