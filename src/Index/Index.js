import React, { useContext, useEffect, useState, useReducer } from 'react'
import BannerSection from './Banner/BannerSection'
import SelectRow2 from './Selects/SelectRow2'
import NewCardsSection from './Cards/NewCardsSection'
import AllMoviesCardSection from './Cards/AllMoviesCardSection'
import ComingSoonCardSection from './Cards/ComingSoonCardSection'
import MovieDetailModal from './Modal/MovieDetailModal'
import { IndexReducer } from './reducer/IndexReducer'
import { IndexDefaultStates } from './reducer/IndexDefaultStates'

export const IndexContext = React.createContext({});


const Index = () => {

    const [state, dispatch] = useReducer(IndexReducer, IndexDefaultStates);
    const reducerObject = {state: state, dispatch: dispatch}
    
    const moviesDefaultState = [];

    const [showModal, setShowModal] = useState(false)
    const [movies, setMovies] = useState(moviesDefaultState)

    useEffect(() => {

        dispatch({type: 'SET_INITIAL_STATES' });

    }, [])

    return (
        <>
            <section>
                <IndexContext.Provider value={{showModal: showModal, setShowModal: setShowModal}}>
                <div className="index-container">
                    <div className="banner-section">
                        <BannerSection />
                    </div>
                    <div className="selects-section">
                        {/* <SelectRow1 props={setShowModal} /> */}
                        <SelectRow2 props={reducerObject} />
                    </div>
                    <div className="newMovies-card-section">
                        <NewCardsSection props={reducerObject} />
                    </div>
                    <div className="allMovies-card-section">
                        <AllMoviesCardSection props={reducerObject} />
                    </div>
                    <div className="comingSoonMovies-card-section">
                        <ComingSoonCardSection props={reducerObject} />
                    </div>
                </div>
                </IndexContext.Provider>
            </section>
            {showModal && (<div className="movie-modal">
                <MovieDetailModal props={{showModal: showModal, setShowModal}} />
            </div>)}
        </>
    )
}

export default Index
