import React, {useState, useEffect} from 'react'
import { data } from '../../helpers/data'

const SelectRow2 = (props) => {

    const defaultFirstRowTitle = "New Movies"

    const [MovieCategoriesOptions, setMovieCategoriesOptions] = useState([])
    const [firstRowTitle, setFirstRowTitle] = useState(defaultFirstRowTitle)

    const fetchMoviesCategoriesOptions = () => {

        const moviesCats = []

        data.map((element) => {
            moviesCats.push(element.category)
        })

        setMovieCategoriesOptions(moviesCats)

    }

    useEffect(() => {
        fetchMoviesCategoriesOptions()
    },[])

    return (
        <div className="selects-row-2">
            <div className="left-section">
                <h2>{firstRowTitle}</h2>
            </div>
            <div className="right-section">
                <select title="Choose a Category">
                    <option disabled selected>Choose Category</option>
                    {
                        MovieCategoriesOptions.map(element => {
                            return (
                                <option>{element}</option>
                            )
                        })
                    }
                </select>
            </div>
        </div>
    )
}

export default SelectRow2
