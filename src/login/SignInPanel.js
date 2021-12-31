import React, { useEffect, useState } from 'react'
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom'
import SignInBox from './SignInBox';

const SignInPanel = ({ props }) => {

    const [UserInContext, setUserInContext] = useState({});
    const [IsUserInContext, setIsUserInContext] = useState(false);
    const [IsMovieInContext, setIsMovieInContext] = useState(false);

    const {setSignUpModal, setShowLoading} = props;

    useEffect(() => {
        setTimeout(() => {
            setShowLoading(false);
        }, 2000)
    }, [])

    const responseGoogle = (response) => {

        const { yu } = response
        const { TX: name, hW: lastName, nv: mail } = yu
        
        const user = {
            name: name,
            lastName: lastName,
            mail: mail
        }

        sessionStorage.setItem('user', JSON.stringify(user));

        console.log(`User in context: ${JSON.stringify(user)}`);
        setUserInContext(user);

        setTimeout(() => {
            setShowLoading(true);
            setTimeout(()=> {
                setIsUserInContext(true);
            },3000)
        })


    }

    return (
        <div className="sign-in-container">
            {IsUserInContext ? (<Redirect to="/reservations" />) : (<SignInBox props={{setSignUpModal: setSignUpModal, responseGoogle: responseGoogle}} />)}
        </div>
    )
}

export default SignInPanel

