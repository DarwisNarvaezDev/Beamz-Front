export const fetchAllSeats = async(reducerObject) => {

    const { state, dispatch } = reducerObject;
    const { seatsMap, venue, day, date } = await state;

    const movie = JSON.parse(sessionStorage.getItem('movieSelected'));
    const {id} = movie;

    const businessObject = {
        venue: venue,
        day: day,
        date: date,
        movie: id
    }

    const data = await fetch('http://localhost:8080/seats' ,{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(businessObject)
            });
    const seats = await data.json();

    return seats;

}