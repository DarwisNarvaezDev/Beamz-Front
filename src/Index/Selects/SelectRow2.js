import React, {useState, useEffect} from 'react'

const SelectRow2 = ({props}) => {

    
    const defaultFirstRowTitle = "New Movies"
    
    const [MovieCategoriesOptions, setMovieCategoriesOptions] = useState([])
    const [firstRowTitle, setFirstRowTitle] = useState(defaultFirstRowTitle)
    
    const excludeDuplicates = () => {

        const generos = props.map(element => {
            return element.gender
        });

        const uniqueGenders = [...new Set(generos)];

        const uniqueGendersUppercased = uniqueGenders.map(element => {
            return element.charAt(0).toUpperCase() + element.substring(1, element.length);
        });
        
        setMovieCategoriesOptions(uniqueGendersUppercased);

    }

    useEffect(() => {
        excludeDuplicates();
    }, [props])

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
