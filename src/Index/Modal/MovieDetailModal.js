import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { AppContext } from '../../router/App'

const MovieDetailModal = ({ props }) => {

    const { showModal, setShowModal } = props

    const {movie, setMovie} = useContext(AppContext);

    const {id, title, imgurl, gender, longdescription} = movie

    const imgCloseButton = process.env.PUBLIC_URL + '/resources/icons8-macos-cerrar-30.png'

    useEffect(() => {
        console.log(movie);
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
                    setShowModal(false)
                }}/>
                <div className="modal-movie-description-container">
                    <h2>{title}</h2>
                    <h4>{gender}</h4>
                    <p>{longdescription}</p>
                    <div className="modal-description-get-tickets">
                        <Link to="/login">Get tickets</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetailModal
