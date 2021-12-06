import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const SignInPanel = ({props}) => {
    
    const setSignUpModal = props;

    return (
        <div className="sign-in-container">
            <div className="sign-in-box">
                <div className="sign-in-with">
                    <p>Sign in with</p>
                </div>
                <div className="sign-in">
                    <div className="no-account">
                        <p>No account yet?</p>
                    </div>
                    <div className="sign-in-button">
                        <a href="#" onClick={() => {
                            setSignUpModal(true)
                        }}>Sign Up!</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignInPanel

