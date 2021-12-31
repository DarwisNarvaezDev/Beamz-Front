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
    const [showLogin, setShowLogin] = useState(false)
    const [showLoading, setShowLoading] = useState(false)

    useEffect(() => {
        setShowLoading(true);
    }, [])

    return (
        <>
            <div className='login-section'>
                {showLoading && (
                    <div className='login-screen'>
                        <div className='loader'>Loading...</div>
                    </div>
                )}
                <div className="login-container">
                    <div className="login-section-column-1">
                        <LoginForm />
                    </div>
                    <div className="login-section-column-2">
                        <SignInPanel props={{ setSignUpModal: SignUpModal, setShowLoading: setShowLoading }} />
                    </div>
                    <div className="login-section-column-3">
                        <img src={imgFondoLogin} alt="cinema" />
                    </div>
                </div>
            </div>
            {showSignUpModal && (<SignUpModal props={setSignUpModal} />)}
            {showReservations && (<Redirect to="/reservations" />)}
            {showLogin && (<Redirect to="/login" />)}
        </>
    )
}

export default Login
