import React, { useState, useEffect } from 'react'
import { data } from '../../helpers/data'
import Card from './Card'

const AllMoviesCardSection = ({ props }) => {

    const allMoviesDefaultState = []

    const [allMovies, setAllMovies] = useState(allMoviesDefaultState)
    const [showMore, setShowMore] = useState(true)

    const appendFiveMovies = async() => {

        const { AllMoviesSectionDefaultState } = await props.state

        const newInterval = allMovies.length + 6
        const newSlice = AllMoviesSectionDefaultState.slice( allMovies.length, newInterval )

        newSlice.map( element => {
            setAllMovies(prevState => [...prevState, element])
        })

        if( allMovies.length > 34 ){

            console.log("no hay mas");
            setShowMore(false);

        }

    }

    const getAllMovies = async () => {

        const { AllMoviesSectionDefaultState } = await props.state
        
        const slice = AllMoviesSectionDefaultState.slice(0, 6);

        setAllMovies(slice);

    }

    useEffect(() => {
        if( allMovies < 50 ){
            getAllMovies()
        }
    }, [props])

    return (
        <>
            <div className="cards-container">
                {
                    allMovies.map((element) => {
                        return (
                            <Card props={element} modalEnabled={true} />
                        )
                    })
                }
            </div>
            { showMore && ( 
            <div className="more-div">
                <form className="more-form">
                    <button type="submit" onClick={(e) => {
                        e.preventDefault()
                        appendFiveMovies()
                    }}>More</button>
                </form>
            </div>)}
        </>
    )
}

export default AllMoviesCardSection
