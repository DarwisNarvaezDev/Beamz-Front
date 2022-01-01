import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom';

const TransactionSuccess = () => {
    
    const imgUrl = process.env.PUBLIC_URL + '/resources/qr.png'
    
    const [showIndex, setshowIndex] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            window.alert("Redirecting to index.")
            setshowIndex(true);
        }, 10000)
    }, [])

    return (
        <div className="success-container">
            <div className="success-wrapper animate__animated animate__bounceIn">
                <div className="success-r1">
                    <h1>Thanks for choosing us!</h1>
                    <div>
                        <img src={imgUrl} alt="Qr-code"></img>
                    </div>
                </div>
                <div className="success-r2">
                    <div>
                        <p>
                        With below's code, you can go to the venue of your choosing and get your tickets.
                        We hope you enjoy your movie, thanks for choosing us!.
                        </p>
                        <p>
                            <strong>We will reach you via mail with all the details you need.</strong>
                        </p>
                    </div>
                </div>
                <div className="success-r3">
                    <div>
                        <p>This is not a disclaimer. </p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora omnis aliquid ipsa rem, odio ullam nemo fugiat saepe rerum corporis modi quasi? Deleniti officiis facilis reiciendis, neque dolorem dolore modi necessitatibus facere ipsum? Aut libero obcaecati quo corporis accusantium sit omnis id distinctio error, odio neque nostrum! Minima blanditiis sed fugit consectetur? Nobis autem vero, a ipsa numquam sed quia animi provident unde? Omnis sunt eos rem expedita quidem earum quisquam quas distinctio. Nulla quas delectus laudantium consequatur ducimus.dicta.
                    </div>
                </div>
            </div>
            { showIndex && (<Redirect to="/" />) }
        </div>
    )
}

export default TransactionSuccess
