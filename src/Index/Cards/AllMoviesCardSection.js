import React, {useState, useEffect} from 'react'
import { data } from '../../helpers/data'
import Card from './Card'

const AllMoviesCardSection = ({ props }) => {

    const allMoviesDefaultState = []

    const [ allMovies, setAllMovies ] = useState(allMoviesDefaultState)

    const fetchAllMovies = () => {

        const onlyFiveMovies = data.slice(0,6)
        setAllMovies(onlyFiveMovies)

    }

    const fetchMoreMovies = () => {

        const onlyFiveMovies = data.slice(0,6)
        onlyFiveMovies.map(element => {
            setAllMovies(prevState => [...prevState, element])
        })

    }

    const handleSubmit = (e) => {

        e.persist()
        e.preventDefault()
        fetchMoreMovies()

    }

    useEffect(() => {
        fetchAllMovies()
    }, [])

    return (
        <>
            <div className="section-title">
                <h2>ALL MOVIES</h2>
            </div>
            <div className="cards-container">
                {
                    allMovies.map((element) => {
                        return (
                            <Card props={element} modalEnabled={true} />
                        )
                    })
                }
            </div>
            <div className="more-div">
                <form onSubmit={handleSubmit} className="more-form">
                    <button type="submit">More</button>
                </form>
            </div>
        </>
    )
}

export default AllMoviesCardSection
