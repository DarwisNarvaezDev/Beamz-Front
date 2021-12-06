import React from 'react'

const BannerSection = () => {

    const banner = process.env.PUBLIC_URL + '/resources/banner1.jpg'

    return (
        <>
            <img src={banner} alt="banner"></img>
        </>
    )
}

export default BannerSection
