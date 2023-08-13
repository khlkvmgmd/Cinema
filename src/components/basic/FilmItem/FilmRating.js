import React from 'react'
import {BsFillBucketFill, BsStar, BsStarFill, BsStarHalf} from 'react-icons/bs'
export const FilmRating = ({rating}) => {
    const isFloat = rating > parseInt(rating)
    const amountOfNonEmptyStars = isFloat?Math.floor(rating)+1:Math.floor(rating)
    
    return (
        <div className = 'FilmRating'>
            {Array(Math.floor(rating)).fill(<BsStarFill/>)}

            {rating != Math.floor(rating)?<BsStarHalf/>:null}

            {Array(5 - (amountOfNonEmptyStars)).fill(<BsStar/>)}

        </div>
    )
}

