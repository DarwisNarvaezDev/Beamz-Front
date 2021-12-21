import React, { useState, useEffect } from 'react'
import SectionTitle from '../Utils/SectionTitle'
import Card from './Card'
import 'animate.css';
import { data } from '../../helpers/data';

const NewCardsSection = ({props}) => {
    
    const newMoviesDefaultState = []

    const [newMovies, setNewMovies] = useState(newMoviesDefaultState)

    const fetchNewMovies = () => {

        const newMovies = data.filter((element) => element.category === "1")
        const onlyFiveNewMovies = newMovies.slice(0,6)
        console.log(onlyFiveNewMovies)
        setNewMovies(onlyFiveNewMovies)

    }

    const fetchMoreNewMovies = () => {

        const newMovies = data.filter((element) => element.category === "1")
        const onlyFiveNewMovies = newMovies.slice(0,12)
        console.log(onlyFiveNewMovies)
        setNewMovies(onlyFiveNewMovies)

    }

    const handleSubmit = (e) => {

        e.persist()
        e.preventDefault()
        fetchMoreNewMovies()

    }

    useEffect(() => {

        fetchNewMovies()

    },[])
    
    return (
        <>
            <div className="cards-container">
                {
                    newMovies.map(element => {
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

export default NewCardsSection
