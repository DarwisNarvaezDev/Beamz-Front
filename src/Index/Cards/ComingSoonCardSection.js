import React, { useEffect, useState } from 'react'
import { data } from '../../helpers/data'
import Card from './Card'

const ComingSoonCardSection = ({props}) => {

    const defaultComingSoonMoviesState = []

    const [comingSoonMovies, setComingSoonMovies] = useState(defaultComingSoonMoviesState)

    const getAllComingSoonMovies = async() => {

        const { ComingSoonMoviesSectionDefaultState } = await props.state
        setComingSoonMovies(ComingSoonMoviesSectionDefaultState)

    }

    useEffect(() => {

        getAllComingSoonMovies();

    }, [props])

    return (
        <>
            <div className="cards-container">
                {
                    comingSoonMovies.map((element) => {
                        return (
                            <Card props={element} modalEnabled={true} />
                        )
                    })
                }
            </div>
            {/* <div className="more-div">
                <form className="more-form">
                    <button type="submit">More</button>
                </form>
            </div> */}
        </>
    )
}

export default ComingSoonCardSection
