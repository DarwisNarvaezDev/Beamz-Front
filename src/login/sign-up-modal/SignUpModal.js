import React from 'react'

const SignUpModal = ({ props }) => {

    const setSignUpModal = props;
    const imgVisible = process.env.PUBLIC_URL + '/resources/icons8-visible-50.png'

    return (
        <div className="sign-up-modal">
            <div className="sign-up-modal-container animate__animated animate__fadeInUpBig">
                <div className="form-status">
                    Form Status!
                </div>
                <div class="sign-up-modal-row-1">
                    <label for="sign-up-with"><strong>You can sign in with:</strong></label>
                    <div id="sign-up-with" className="sign-up with">
                        <p>Google</p>
                        <p>Github</p>
                    </div>
                </div>
                <div class="sign-up-modal-row-2">
                    <p><strong>Or you can create your account:</strong></p>
                    <form>
                        <div className="signUp-form-inputs">
                            <p>Name</p>
                            <input type="text"></input>
                            <p>Lastname</p>
                            <input type="text"></input>
                            <p>Email</p>
                            <input type="text"></input>
                            <p>Password</p>
                            <input type="password" />
                            <p>Repeat your password</p>
                            <input type="password"></input>
                        </div>
                        <div className="signUp-form-buttons">
                            <div className="sign-up-modal-buttons-div-col1">
                                <button type="submit" className="signUp-submit">Submit</button>
                            </div>
                            <div className="sign-up-modal-buttons-div-col2">
                                <button type="button" className="signUp-cancel" onClick={() => {
                                    setSignUpModal(false)
                                }}>Cancel</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>

        </div>
    )
}

export default SignUpModal
