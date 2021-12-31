import React from 'react'

const EmptyCard = () => {
    return (
        <div className="card animate__animated animate__fadeInUp">
        <div className="card-row-1">
            <div className='loading-image'></div>
        </div>
        <div className="card-row-2">
            <h3>Loading...</h3>
        </div>
        <div className="card-row-3">
            <p>Loading...</p>
        </div>
    </div>
    )
}

export default EmptyCard
