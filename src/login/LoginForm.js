import React from 'react'

const LoginForm = () => {
    return (
        <div className="login-form-container">
        <form>
            <h3>Log in</h3>
            <div className="form-row-2">
                <label for="email-form-input">Email</label>
                <input type="text" value="Type your email" id="email-form-input"></input>
            </div>
            <div className="form-row-3">
                <label for="password-form-input">Password</label>
                <input type="text" value="Type your assword" id="password-form-input"></input>
            </div>
            <div className="form-row-4">
                <div className="form-row-4-column-1">
                    <button type="submit">Login</button>
                </div>
                <div className="form-row-4-column-2">
                    <button type="button">Cancel</button>
                </div>
            </div>
        </form>
    </div>
    )
}

export default LoginForm
