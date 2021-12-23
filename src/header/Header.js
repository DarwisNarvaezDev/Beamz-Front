import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    const imgLogo = process.env.PUBLIC_URL + '/resources/icons8-película-50.png'
    const imgSearch = process.env.PUBLIC_URL + '/resources/icons8-search-64.png'
    const imgUser = process.env.PUBLIC_URL + '/resources/icons8-user-50.png'
    const imgMenu = process.env.PUBLIC_URL + '/resources/icons8-menú-24.png'

    useEffect(() => {
        document.title = "Beamz App"
    }, [])

    return (
        <>
            <header>
                <div className="nav-container">
                    <ul>
                        <li className="col-0 nav-li" title="Beamz-app"><img src={imgMenu} alt="logo" /></li>
                        <li className="col-01 nav-li" title="Beamz-app"><h4>BEAMZ</h4></li>
                        <li className="col-1 nav-li" title="Home"><Link to="/"><img src={imgLogo} alt="logo" /></Link></li>
                        <li className="col-2 nav-li"><Link to="/" className='link-to-movies'><p>MOVIES</p></Link></li>
                        <li className="col-3 nav-li"><p>CANDY</p></li>
                        <li className="col-4 nav-li"><p>B-CLUB</p></li>
                        <li className="col-5 nav-li" title="Search"><img src={imgSearch} alt="search" className="search-icon" /></li>
                        <li className="col-6 nav-li" title="Login"><Link to="/login"><img src={imgUser} alt="user" className="user-icon" /></Link></li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header
