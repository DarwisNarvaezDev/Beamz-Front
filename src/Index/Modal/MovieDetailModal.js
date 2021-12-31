import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import {CapitalizeLetter} from '../../helpers/CapitalizeLetter';
import { TitleCase } from '../../helpers/TitleCase';
import { AppContext } from '../../router/App'

const MovieDetailModal = ({ props }) => {

    const userInStorage = sessionStorage.getItem('user');

    const { showModal, setShowModal, setIsMovieSelected, reducerObject } = props

    const { setshowLogin } = reducerObject;

    const {movie, setMovie} = useContext(AppContext);

    const {id, title, imgurl, gender, longdesc, shortdesc } = movie

    const imgCloseButton = process.env.PUBLIC_URL + '/resources/icons8-macos-cerrar-30.png'

    const arrayString = imgurl.split("/");
    const imgUrlCrop = arrayString[arrayString.length-1];

    useEffect(() => {
        const arrayString = imgurl.split("/");
        console.log(arrayString[arrayString.length-1]);
    })

    return (
        <div className="modal-container animate__animated animate__fadeInUpBig">
            <div className="modal-container-row-1">
                <div className="modal-movie-img-container">
                    <img src={imgurl} alt={title} />
                </div>
                <div className="modal-tags-img-container">

                </div>
            </div>
            <div className="modal-container-row-2">
                <img src={imgCloseButton} className="close-modal-button" onClick={() => {
                    setShowModal(false);
                }}/>
                <div className="modal-movie-description-container">
                    <h2>{TitleCase(title)}</h2>
                    <h4>{CapitalizeLetter(gender)}</h4>
                    <p>{longdesc}</p>
                    <div className="modal-description-get-tickets">
                        <Link to="/reservations" onClick={(e) => {
                            const movie = {id: id, imgurl: imgUrlCrop, title: title, gender: gender, longdesc: longdesc, shortdesc: shortdesc};
                            sessionStorage.setItem('movieSelected', JSON.stringify(movie));
                            setIsMovieSelected(true);
                        }}>Get tickets</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetailModal
