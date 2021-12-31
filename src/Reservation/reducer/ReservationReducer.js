import { doFetch } from "./DoFetch";

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

    const { venue, day, date, seatsSelected, paymentMethod } = state;

    const confirmPanelCompleteValidation = venue !== '' && day !== '' && date !== '';
    const reservationCompleteValidation = venue !== '' && day !== '' && date !== '' && seatsSelected.length > 0 && paymentMethod !== '';

    //DO MAP: function that build a huge map object by pairing the seat with his value (class)
    if( action.type === 'DO_MAP' ){

        const {
        a1,
        b1,b2,
        c1,c2,c3,
        d1,d2,d3,d4,
        e1,e2,e3,e4,e5,
        f1,f2,f3,f4,f5,f6,
        g1,g2,g3,g4,g5,g6,
        h1,h2,h3,h4,h5,h6,h7,
    
        //Sector B
        a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,
        b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,
        c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,
        d5,d6,d7,d8,d9,d10,d11,d12,d13,d14,
        e6,e7,e8,e9,e10,e11,e12,e13,e14,e15,
        f7,f8,f9,f10,f11,f12,f13,f14,f15,f16,
        g7,g8,g9,g10,g11,g12,g13,g14,g15,g16,
        h8,h9,h10,h11,h12,h13,h14,h15,h16,h17,
    
        //Sector C
        a13,
        b13,b14,
        c14,c15,c16,
        d15,d16,d17,d18,
        e16,e17,e18,e19,e20,
        f17,f18,f19,f20,f21,f22,
        g17,g18,g19,g20,g21,g22,
        h18,h19,h20,h21,h22,h23,h24 
    } = state;

        const seatsMap = state.seats

        //Sector A
        seatsMap.set('a1', a1);
        seatsMap.set('b1', b1);
        seatsMap.set('b2', b2);
        seatsMap.set('c1', c1);
        seatsMap.set('c2', c2);
        seatsMap.set('c3', c3);
        seatsMap.set('d1', d1);
        seatsMap.set('d2', d2);
        seatsMap.set('d3', d3);
        seatsMap.set('d4', d4);
        seatsMap.set('e1', e1);
        seatsMap.set('e2', e2);
        seatsMap.set('e3', e3);
        seatsMap.set('e4', e4);
        seatsMap.set('e5', e5);
        seatsMap.set('f1', f1);
        seatsMap.set('f2', f2);
        seatsMap.set('f3', f3);
        seatsMap.set('f4', f4);
        seatsMap.set('f5', f5);
        seatsMap.set('f6', f6);
        seatsMap.set('g1', g1);
        seatsMap.set('g2', g2);
        seatsMap.set('g3', g3);
        seatsMap.set('g4', g4);
        seatsMap.set('g5', g5);
        seatsMap.set('g6', g6);
        seatsMap.set('h1', h1);
        seatsMap.set('h2', h2);
        seatsMap.set('h3', h3);
        seatsMap.set('h4', h4);
        seatsMap.set('h5', h5);
        seatsMap.set('h6', h6);
        seatsMap.set('h7', h7);

        //Sector B
        seatsMap.set('a2', a2);
        seatsMap.set('a3', a3);
        seatsMap.set('a4', a4);
        seatsMap.set('a5', a5);
        seatsMap.set('a6', a6);
        seatsMap.set('a7', a7);
        seatsMap.set('a8', a8);
        seatsMap.set('a9', a9);
        seatsMap.set('a10', a10);
        seatsMap.set('a11', a11);
        seatsMap.set('a12', a12);
        seatsMap.set('b3', b3);
        seatsMap.set('b4', b4);
        seatsMap.set('b5', b5);
        seatsMap.set('b6', b6);
        seatsMap.set('b7', b7);
        seatsMap.set('b8', b8);
        seatsMap.set('b9', b9);
        seatsMap.set('b10', b10);
        seatsMap.set('b11', b11);
        seatsMap.set('b12', b12);
        seatsMap.set('c4', c4);
        seatsMap.set('c5', c5);
        seatsMap.set('c6', c6);
        seatsMap.set('c7', c7);
        seatsMap.set('c8', c8);
        seatsMap.set('c9', c9);
        seatsMap.set('c10', c10);
        seatsMap.set('c11', c11);
        seatsMap.set('c12', c12);
        seatsMap.set('c13', c13);
        seatsMap.set('d5', d5);
        seatsMap.set('d6', d6);
        seatsMap.set('d7', d7);
        seatsMap.set('d8', d8);
        seatsMap.set('d9', d9);
        seatsMap.set('d10', d10);
        seatsMap.set('d11', d11);
        seatsMap.set('d12', d12);
        seatsMap.set('d13', d13);
        seatsMap.set('d14', d14);
        seatsMap.set('e6', e6);
        seatsMap.set('e7', e7);
        seatsMap.set('e8', e8);
        seatsMap.set('e9', e9);
        seatsMap.set('e10', e10);
        seatsMap.set('e11', e11);
        seatsMap.set('e12', e12);
        seatsMap.set('e13', e13);
        seatsMap.set('e14', e14);
        seatsMap.set('e15', e15);
        seatsMap.set('f7', f7);
        seatsMap.set('f8', f8);
        seatsMap.set('f9', f9);
        seatsMap.set('f10', f10);
        seatsMap.set('f11', f11);
        seatsMap.set('f12', f12);
        seatsMap.set('f13', f13);
        seatsMap.set('f14', f14);
        seatsMap.set('f15', f15);
        seatsMap.set('f16', f16);
        seatsMap.set('f17', f17);
        seatsMap.set('g7', g7);
        seatsMap.set('g8', g8);
        seatsMap.set('g9', g9);
        seatsMap.set('g10', g10);
        seatsMap.set('g11', g11);
        seatsMap.set('g12', g12);
        seatsMap.set('g13', g13);
        seatsMap.set('g14', g14);
        seatsMap.set('g15', g15);
        seatsMap.set('g16', g16);
        seatsMap.set('h8', h8);
        seatsMap.set('h9', h9);
        seatsMap.set('h10', h10);
        seatsMap.set('h11', h11);
        seatsMap.set('h12', h12);
        seatsMap.set('h13', h13);
        seatsMap.set('h14', h14);
        seatsMap.set('h15', h15);
        seatsMap.set('h16', h16);
        seatsMap.set('h17', h17);

        //Sector C
        seatsMap.set('a13', a13);
        seatsMap.set('b13', b13);
        seatsMap.set('b14', b14);
        seatsMap.set('c14', c14);
        seatsMap.set('c15', c15);
        seatsMap.set('c16', c16);
        seatsMap.set('d15', d15);
        seatsMap.set('d16', d16);
        seatsMap.set('d17', d17);
        seatsMap.set('d18', d18);
        seatsMap.set('e16', e16);
        seatsMap.set('e17', e17);
        seatsMap.set('e18', e18);
        seatsMap.set('e19', e19);
        seatsMap.set('e20', e20);
        seatsMap.set('f18', f18);
        seatsMap.set('f19', f19);
        seatsMap.set('f20', f20);
        seatsMap.set('f21', f21);
        seatsMap.set('f22', f22);
        seatsMap.set('g17', g17);
        seatsMap.set('g18', g18);
        seatsMap.set('g19', g19);
        seatsMap.set('g20', g20);
        seatsMap.set('g21', g21);
        seatsMap.set('g22', g22);
        seatsMap.set('h18', h18);
        seatsMap.set('h19', h19);
        seatsMap.set('h20', h20);
        seatsMap.set('h21', h21);
        seatsMap.set('h22', h22);
        seatsMap.set('h23', h23);
        seatsMap.set('h24', h24);

        return {
            ...state,
            seats: seatsMap//Retornar map construido con todos los asientos
        }

    }

    if( action.type === 'CHANGE_MAP' ){

        const seatsCompared = action.payload;
        console.log(seatsCompared);

        return {
            ...state
        }

    }

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

        if( !confirmPanelCompleteValidation ){
            return {
                ...state,
                ModalMessage: 'Please, complete your movie preferences first!',
                ModalType: 3
            }
        }

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

        if( !confirmPanelCompleteValidation ){
            return {
                ...state,
                ModalMessage: 'Please, complete your movie preferences first!',
                ModalType: 3
            }
        }

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

        if( !confirmPanelCompleteValidation ){
            return {
                ...state,
                ModalMessage: 'Please, complete your movie preferences first!',
                ModalType: 3
            }
        }

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

    if (action.type === 'DAY_SELECTED') {

        const daySelected = action.payload;

        return {
            ...state,
            day: daySelected,
        }

    }

    if (action.type === 'DATE_SELECTED') {

        const { job, ref } = action.payload;

        switch (job) {
            case 1:
                return {
                    ...state,
                    fourteenInput: 'pick-time-input',
                    eighteenInput: 'pick-time-input-empty',
                    twentytwoInput: 'pick-time-input-empty',
                    oneInput: 'pick-time-input-empty',
                    date: ref,
                }
            case 2:
                return {
                    ...state,
                    fourteenInput: 'pick-time-input-empty',
                    eighteenInput: 'pick-time-input',
                    twentytwoInput: 'pick-time-input-empty',
                    oneInput: 'pick-time-input-empty',
                    date: ref
                }
            case 3:
                return {
                    ...state,
                    fourteenInput: 'pick-time-input-empty',
                    eighteenInput: 'pick-time-input-empty',
                    twentytwoInput: 'pick-time-input',
                    oneInput: 'pick-time-input-empty',
                    date: ref
                }
            case 4:
                return {
                    ...state,
                    fourteenInput: 'pick-time-input-empty',
                    eighteenInput: 'pick-time-input-empty',
                    twentytwoInput: 'pick-time-input-empty',
                    oneInput: 'pick-time-input',
                    date: ref
                }
            default:
                throw new Error('No job to perform')
        }

    }

    if( action.type === 'SEAT_SELECTED' ){

        const seatSelected = action.payload;
        const seatsMap = state.seats;
        
        for( let [key, value] of seatsMap ){
            if( key === seatSelected ){
                seatsMap.set(key, 'seat-selected')
            }
        }

        return {
            ...state,
            seats: seatsMap
        }

    }

    if( action.type === 'SEAT_DESELECTED' ){

        const seatSelected = action.payload;
        const seatsMap = state.seats;
        
        for( let [key, value] of seatsMap ){
            if( key === seatSelected ){
                seatsMap.set(key, 'seat')
            }
        }

        return {
            ...state,
            seats: seatsMap
        }

    }

    if( action.type === 'SEATS_SELECTED' ){

        const seatsSelected = action.payload;

        return {
            ...state,
            seatsSelected: seatsSelected,
            ModalMessage: 'Nice, now add your payment info!',
            ModalType: 4,
            confirmSelected: 'confirm-div',
            showConfirmPanel: false,
            selectSelected: 'select-div',
            showSelectPanel: false,
            paymentSelected: 'div-seleccionado-small',
            showPaymentPanel: true,
            summarySelected: 'summary-div',
            showSummary: false, 
            getSelected: 'get-div',
            showGetButton: false,

        }

    }

    if( action.type === 'PAYMENT_RECEIVED' ){

         const paymentMethod = action.payload;

         switch(paymentMethod){
             case 1:
                return {
                    ...state,
                    ModalMessage: 'Awesome! please check all the info before placing your order',
                    ModalType: 4,
                    confirmSelected: 'confirm-div',
                    showConfirmPanel: false,
                    selectSelected: 'select-div',
                    showSelectPanel: false,
                    paymentSelected: 'payment-div',
                    showPaymentPanel: false,
                    summarySelected: 'div-seleccionado-small',
                    showSummary: true, 
                    getSelected: 'get-div',
                    showGetButton: false,
                    paymentMethod: 'cash'
                }
            case 2:
                return {
                    ...state,
                    ModalMessage: 'Awesome! please check all the info before placing your order',
                    ModalType: 4,
                    confirmSelected: 'confirm-div',
                    showConfirmPanel: false,
                    selectSelected: 'select-div',
                    showSelectPanel: false,
                    paymentSelected: 'payment-div',
                    showPaymentPanel: false,
                    summarySelected: 'div-seleccionado-small',
                    showSummary: true, 
                    getSelected: 'get-div',
                    showGetButton: false,
                    paymentMethod: 'credit card'
                }
             default:
                 throw new Error('No payment method passed');
         }

        return {
            ...state
        }
        
    }

    if( action.type === 'TAG_SEATS' ){

        let priceToShow = 0;
        const {seatsPrice} = state;
        const { seatsSelected } = state;

        seatsSelected.forEach(element => {
            priceToShow = priceToShow + seatsPrice;
        })

        return {
            ...state,
            priceToShow: priceToShow
        }

    }

    if( action.type === 'VALIDATE_CONFIRM_PANEL' ){

        // venue: '',
        // day: 'monday'
        // date: '14:00'

        // 1: blue
        // 2: green
        // 3: red

        if( !state.venue ){
            return {
                ...state,
                ModalMessage: 'Please, select a venue!',
                ModalType: 3
            }
        }
        if( !state.day ){
            return {
                ...state,
                ModalMessage: 'Please, select the day!',
                ModalType: 3
            }
        }
        if( !state.date ){
            return {
                ...state,
                ModalMessage: 'Please, select the date!',
                ModalType: 3
            }
        }
        if( state.venue && state.day && state.date ){
            
            return {
                ...state,
                ModalMessage: 'Nice, now pick your seats!',
                ModalType: 4,
                confirmSelected: 'confirm-div',
                showConfirmPanel: false,
                selectSelected: 'div-seleccionado-small',
                showSelectPanel: true,
                paymentSelected: 'payment-div',
                showPaymentPanel: false,
                summarySelected: 'summary-div',
                showSummary: false, 
                getSelected: 'get-div',
                showGetButton: false,
            }
        }
        
    }

    if( action.type === 'SWITCH_SEAT_COLOR' ){

        return {
            ...state,
        seatClass: 'seat-selected'
        }

    }

    if( action.type === 'GET_TICKETS' ){

        const movie = JSON.parse(sessionStorage.getItem('movieSelected'));
        const user = JSON.parse(sessionStorage.getItem('user'));

        if( reservationCompleteValidation ){

            const { name, mail, lastName } = user;
            const { id } = movie;
            const { day, date, venue, seatsSelected, paymentMethod } = state;

            const businessObject = {
                customer_mail: mail,
                customer_name: name,
                customer_lastname: lastName,
                movie: id,
                day: day,
                date: date,
                seats: seatsSelected,
                venue: venue,
                payment_method: paymentMethod
            };

            console.log("fetching data");
            const response = doFetch(businessObject);
            if( response !== undefined ){
                return {
                    ...state,
                    orderAccepted: true
                }
            }
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

    if( action.type === 'MODAL_NOTIFICATION' ){

        const { message, modalType } = action.payload;

        console.log(message);
        console.log(modalType);

        return {
            ...state,
            ModalMessage: message,
            ModalType: modalType

        }

    }

    throw new Error("No action passed");


}