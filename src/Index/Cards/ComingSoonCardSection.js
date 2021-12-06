import React, { useEffect, useState } from 'react'
import { data } from '../../helpers/data'
import Card from './Card'

const ComingSoonCardSection = () => {

    const defaultComingSoonMoviesState = []

    const [comingSoonMovies, setComingSoonMovies] = useState(defaultComingSoonMoviesState)

    const fetchComingSoonMovies = () => {

        const onlyComingSoonMovies = data.filter(element => element.category === "2")
        setComingSoonMovies(onlyComingSoonMovies)

    }

    const fetchMoreComingSoonMovies = () => {

        const onlyComingSoonMovies = data.filter(element => element.category === "2")
        onlyComingSoonMovies.map((element) => {
            setComingSoonMovies(prevState => [...prevState, element])
        })

    }

    const handleSubmit = (e) => {

        e.persist()
        e.preventDefault()
        fetchMoreComingSoonMovies()

    }

    useEffect(() => {

        fetchComingSoonMovies()

    }, [])

    return (
        <>
            <div className="section-title">
                <h2>COMING SOON</h2>
            </div>
            <div className="cards-container">
                {
                    comingSoonMovies.map((element) => {
                        return (
                            <Card props={element} />
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

export default ComingSoonCardSection
