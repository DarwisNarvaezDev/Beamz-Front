import React, { useContext, useEffect, useState } from 'react'
import BannerSection from './Banner/BannerSection'
import SelectRow2 from './Selects/SelectRow2'
import NewCardsSection from './Cards/NewCardsSection'
import AllMoviesCardSection from './Cards/AllMoviesCardSection'
import ComingSoonCardSection from './Cards/ComingSoonCardSection'
import MovieDetailModal from './Modal/MovieDetailModal'

export const IndexContext = React.createContext({});

const Index = () => {

    const [showModal, setShowModal] = useState(false)

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
                        <SelectRow2 />
                    </div>
                    <div className="newMovies-card-section">
                        <NewCardsSection />
                    </div>
                    <div className="allMovies-card-section">
                        <AllMoviesCardSection />
                    </div>
                    <div className="comingSoonMovies-card-section">
                        <ComingSoonCardSection />
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
