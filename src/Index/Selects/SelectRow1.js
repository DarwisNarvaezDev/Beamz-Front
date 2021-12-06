import React, {useEffect, useState, useContext} from 'react'
import { data } from '../../helpers/data'
import { AppContext } from '../../router/App'
import Option from './Option'

const SelectRow1 = ({props}) => {
    
    const setShowModal = props

    const defaultOptions = ['Palermo', 'Belgrano', 'Nuñez']
    const defaultMovieOptions = []

    const [options, setOptions] = useState(defaultOptions)
    const [MovieOptions, setMovieOptions] = useState(defaultMovieOptions)
    const [movieToContext, setMovieToContext] = useState({})

    const { movie, setMovie } = useContext(AppContext);

    const fetchMoviesTitle = () => {

        const movies = []

        data.map((element) => {
            movies.push(element)
        })

        setMovieOptions(movies)

    }


    useEffect(() => {
        fetchMoviesTitle()
    },[])

    return (
        <div className="selects-row-1">
            <form>
                <select title="Select a venue">
                    <option disabled selected>Select a Venue</option>
                    {
                        options.map(element => {
                            return (
                                <option>{element}</option>
                            )
                        })
                    }
                </select>
                <select title="Select a movie">
                    <option disabled selected>Select a Movie</option>
                    {
                        MovieOptions.map(element => {
                            return (
                                <Option props={element}/>
                            )
                        })
                    }
                </select>
            </form>
        </div>
    )
}

export default SelectRow1
