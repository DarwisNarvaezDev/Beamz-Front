import React from 'react'
import GoogleLogin from 'react-google-login'

const SignInBox = ({props}) => {
    
    const GoogleClientId = "54964921283-6gnskdbk60pa5g8ro172v262a897ri6j.apps.googleusercontent.com"
    
    const { setSignUpModal, responseGoogle } = props;

    return (
        <div className="sign-in-box">
                <div className="sign-in-with">
                    <p>Log in with</p>
                    <div className='google'>
                    <GoogleLogin
                        clientId={GoogleClientId}
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                    </div>
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
    )
}

export default SignInBox
