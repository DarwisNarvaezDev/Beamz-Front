import { fetchAllSeats } from "./FetchAllSeats"

export const compareMap = async(reducerObject) => {

    const { state, dispatch } = reducerObject;

    const seatsInDb = await fetchAllSeats(reducerObject);
    const { seats } = await state;
    const seatsCompared = seats;

    for( let [ key, value ] of seatsCompared ){
        seatsInDb.forEach(element => {
            if( key === element ){

                seatsCompared.set(key, 'seat-disabled')

            }
        })
    }

    dispatch({type: 'CHANGE_MAP', payload: seatsCompared});

}