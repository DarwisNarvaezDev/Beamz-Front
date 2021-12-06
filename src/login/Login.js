import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext, UserContext } from '../router/App'
import LoginForm from './LoginForm'
import SignUpModal from './sign-up-modal/SignUpModal'
import SignInPanel from './SignInPanel'
import { Redirect } from 'react-router'

const Login = () => {

    const imgFondoLogin = process.env.PUBLIC_URL + '/resources/cinema2.jpeg'
    const [showSignUpModal, setSignUpModal] = useState(false)
    const [showReservations, setShowReservations] = useState(false)

    const {movie, setMovie} = useContext(AppContext);
    const {user, setUser} = useContext(UserContext);

    const checkMoviesAndUserInContext = () => {

        const {id} = movie
        const {dni} = user

        if(id === undefined){
            
            if( dni === undefined ){

                

            }
            

        }else{

            setShowReservations(true)

        }

    }

    useEffect(() => {

        console.log(movie)
        checkMoviesAndUserInContext()

    },[])

    return (
        <>
        <section>
            <div className="login-container animate__animated animate__fadeInRightBig">
                <div className="login-section-column-1">
                    <LoginForm />
                </div>
                <div className="login-section-column-2">
                    <SignInPanel props={setSignUpModal} />
                </div>
                <div className="login-section-column-3">
                    <img src={imgFondoLogin} alt="cinema" />
                </div>
            </div>
        </section>
        { showSignUpModal && (<SignUpModal props={setSignUpModal} />) }
        { showReservations && (<Redirect to="/helper"/>)}
        </>
    )
}

export default Login
