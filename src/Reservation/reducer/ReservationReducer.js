export const ReservationReducer = (state, action) => {

    // confirmSelected: 'confirm-div',
    // showConfirmPanel: false,
    // selectSelected: 'select-div',
    // showSelectPanel: false,
    // getSelected: 'get-div',
    // showGetButton: false
    
    if(action.type === 'CONFIRM_CLICK'){

        return {...state,
             confirmSelected: 'div-seleccionado',
             showConfirmPanel: true,
             selectSelected: 'select-div',
             showSelectPanel: false
            }

    }

    if(action.type === 'SELECT_CLICK'){

        return {...state,
             confirmSelected: 'confirm-div',
            showConfirmPanel: false,
            selectSelected: 'div-seleccionado-small',
            showSelectPanel: true}

    }

    throw new Error("No action passed");

}