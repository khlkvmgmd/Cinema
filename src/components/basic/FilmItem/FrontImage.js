import React from 'react'

export const FrontImage = ({imageURL}) => {
    return (
        <div className="FrontImage">
            <div className="ImageCon">
                <img src={imageURL} alt="poster-image"/>
            </div>
        </div>
    )
}