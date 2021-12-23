import React, { useContext, useEffect } from 'react'
import App, { AppContext } from '../../router/App';
import { IndexContext } from '../Index';

const Card = ({ props, modalEnabled }) => {

    const { id, imgurl, title, gender, shortdesc, longdesc } = props

    const imgCard = process.env.PUBLIC_URL + `/resources/banners/${gender}/${imgurl}`

    const genderFormatted = gender.charAt(0).toUpperCase() + gender.substring(1, gender.length);

    const { movie, setMovie } = useContext(AppContext);
    const { showModal, setShowModal } = useContext(IndexContext)

    const cambiarContext = () => {

        setMovie({
            id: id,
            title: title,
            gender: gender,
            imgurl: imgCard,
            shortdes: shortdesc,
            longdesc: longdesc
        })
        setShowModal(true)

    }

    useEffect(() => {


    }, [props])

    return (
        <div className="card animate__animated animate__fadeInUp" key={id}>
            <div className="card-row-1">
                <img src={imgCard} alt="imagen de prueba" onClick={() => {
                    if( modalEnabled ){
                        cambiarContext()
                    }else{
                        console.log("El modal enabled es false, por tanto no se muestra el modal");
                    }
                }} />
            </div>
            <div className="card-row-2">
                <h3>{title.toUpperCase()}</h3>
            </div>
            <div className="card-row-3">
                <p>{genderFormatted}</p>
            </div>
        </div>
    )
}

export default Card
