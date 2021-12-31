import React, { useEffect, useState, useReducer } from 'react'
import BannerSection from './Banner/BannerSection'
import SelectRow2 from './Selects/SelectRow2'
import NewCardsSection from './Cards/NewCardsSection'
import AllMoviesCardSection from './Cards/AllMoviesCardSection'
import ComingSoonCardSection from './Cards/ComingSoonCardSection'
import MovieDetailModal from './Modal/MovieDetailModal'
import { IndexReducer } from './reducer/IndexReducer'
import { IndexDefaultStates } from './reducer/IndexDefaultStates'
import EmptyCardsSection from './Cards/loading/EmptyCardsSection'

export const IndexContext = React.createContext({});

const Index = ({ props }) => {

    const { IsMovieSelected, setIsMovieSelected } = props;

    const [state, dispatch] = useReducer(IndexReducer, IndexDefaultStates);

    const [showModal, setShowModal] = useState(false)

    const [showMovies, setshowMovies] = useState(false);

    const reducerObject = { state: state, dispatch: dispatch }

    useEffect(() => {
        dispatch({ type: 'SET_INITIAL_STATES' });
        setTimeout(() => {
            setshowMovies(true);
        }, 2500)
    }, [])

    return (
        <>
            <section>
                <IndexContext.Provider value={{ showModal: showModal, setShowModal: setShowModal }}>
                    <div className="index-container">
                        <div className="banner-section">
                            <BannerSection />
                        </div>
                        <div className="selects-section">
                            <SelectRow2 props={reducerObject} />
                        </div>
                        <div className="newMovies-card-section">
                            {showMovies ? (<NewCardsSection props={reducerObject} />) : (<EmptyCardsSection />)}
                        </div>
                        <div className="allMovies-card-section">
                            <div className="section-title">
                                <h2>ALL MOVIES</h2>
                            </div>
                            {showMovies ? (<AllMoviesCardSection props={reducerObject} />) : (<EmptyCardsSection />)}
                        </div>
                        <div className="comingSoonMovies-card-section">
                            <div className="section-title">
                                <h2>COMING SOON</h2>
                            </div>
                            {showMovies ? (<ComingSoonCardSection props={reducerObject} />) : (<EmptyCardsSection />)}
                        </div>
                    </div>
                </IndexContext.Provider>
            </section>
            {showModal && (<div className="movie-modal">
                <MovieDetailModal props={{ showModal: showModal, setShowModal, IsMovieSelected: IsMovieSelected, setIsMovieSelected: setIsMovieSelected, reducerObject: reducerObject }} />
            </div>)}
        </>
    )
}

export default Index
