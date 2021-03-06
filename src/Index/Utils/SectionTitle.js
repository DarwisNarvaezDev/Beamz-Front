import React from 'react'

const SectionTitle = ({props}) => {
    
    const { title } = props

    return (
        <div className="section-title">
                <h2>{title}</h2>
        </div>
    )
}

export default SectionTitle
