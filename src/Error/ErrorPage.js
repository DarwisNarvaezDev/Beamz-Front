import React from 'react'

const ErrorPage = () => {
    
    const imgUrl = process.env.PUBLIC_URL + '/resources/wojack.png'
    
    return (
        <div className="error-page-container">
            <div className="error-page-wrapper">
                <div className="error-message-wrapper">
                    <div className="error-message-col1">
                        <div className="wojack-wrapper">
                            <img src={imgUrl}></img>
                        </div>
                    </div>
                    <div className="error-message-col2">
                        <div className="error-message-paragraph">
                            <h1>Ups!</h1>
                            <p>We couldn't find the resource that you looking for.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage
