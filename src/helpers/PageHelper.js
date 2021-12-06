import React,{useContext, useEffect} from 'react'
import { AppContext } from '../router/App';

const PageHelper = () => {
    
    const { movie, setMovie } = useContext(AppContext);
    const { id, imgurl, title, gender, shortdescription, longdescription } = movie

    useEffect(() => {

        console.log(movie)

    }, [])

    return (
        <div>
            <h2>Hola mundo</h2>
        </div>
    )
}

export default PageHelper
