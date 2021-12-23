import { pingFetch } from './FetchAllMovies'

export const IndexReducer = async (state, action) => {

    //Actions to be performed in the index page
    const data = await pingFetch();

    //Get all movies action
    if (action.type === 'SET_INITIAL_STATES') {

        const NewMovies = data.filter(element => element.category === '1');
        const AllMovies = data;
        const ComingSoonMovies = data.filter(element => element.category === '2')

        return {
            ...state,
            NewMoviesSectionDefaultState: NewMovies,
            AllMoviesSectionDefaultState: AllMovies,
            ComingSoonMoviesSectionDefaultState: ComingSoonMovies,
            FilteredMoviesDefaultState: []
        }

    }

    if( action.type === 'CHANGE_NEWMOVIES_TITLE' ){

        // console.log(action.payload.toLowerCase().replace(/-/g, ""));
        const genderCriteria = action.payload.toLowerCase();

        const genderFiltered = data.filter( element => element.gender === genderCriteria );

        const ComingSoonMovies = data.filter(element => element.category === '2')

        const gender = action.payload;
        const AllMovies = data;

        return {
            ...state,
            NewMoviesTitleDefaultState: gender,
            AllMoviesSectionDefaultState: AllMovies,
            ComingSoonMoviesSectionDefaultState: ComingSoonMovies,
            FilteredMoviesDefaultState: genderFiltered
        }

    }

    throw new Error('No action passed to index reducer');

};