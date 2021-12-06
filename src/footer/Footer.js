import React from 'react'

const Footer = () => {
    
    const imgLogo = process.env.PUBLIC_URL + '/resources/icons8-película-50.png'
    
    return (
        <>
            <footer>
                <div className="footer-container">
                    <div className="footer-column logo-section">
                        <img src={imgLogo} alt="Beamz"/>
                        <h4>BEAMZ</h4>
                    </div>
                    <div className="footer-column">
                        <ul>
                            <li><strong>MOVIES</strong></li>
                            <li>NEW FILMS</li>
                            <li>ALL FILMS</li>
                            <li>COMING SOON</li>
                            <li><strong>USER</strong></li>
                            <li>SIGN UP</li>
                            <li>SIGN IN</li>
                        </ul>
                    </div>
                    <div className="footer-column candy-section">
                        <ul>
                            <li><strong>CANDY</strong></li>
                            <li>COMBOS</li>
                            <li>DEALS</li>
                            <li>SPECIAL</li>
                        </ul>
                    </div>
                    <div className="footer-column venues-section">
                        <ul>
                            <li><strong>VENUES</strong></li>
                            <li>CINEMAS</li>
                            <li>PRICES</li>
                            <li>3D</li>
                            <li>4D</li>
                            <li>SAFETY INFO</li>
                        </ul>
                    </div>
                </div>
                <div className="customer-service">
                    <a type="button" href="#"><strong>CUSTOMER SERVICE</strong></a>
                </div>
            </footer>
        </>
    )
}

export default Footer
