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

    throw new Error("No action passed");

}