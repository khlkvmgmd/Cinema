import React from 'react'
import { FrontImage } from './FrontImage'
import './FilmItem.css'
import { FilmName } from './FilmName'
import { FilmRating } from './FilmRating'
import { Critiques } from './Critiques'
import { Link } from 'react-router-dom';
export const FilmItem = ({ data }) => {
    const count = 0
    return (
        <div className="FilmItem">
            <FrontImage imageURL={data.imageURL} />
            <div className="front">
                <FilmName name={data.name} />
                <FilmRating rating={data.rating} />
            </div>
            <div className="back">
                <div className="backContent">
                    <FilmName name={data.name} />
                    <FilmRating rating={data.rating} />
                    <div className="Description">{data.description.substr(0, 90)}...</div>
                    <h5>Рецензии</h5>
                    <Critiques/>
                    <div className="FilmItemButtons">
                        <button>Написать рецензию</button>
                        <button style = {{background:'var(--red)', color:'#fff'}}>Хочу посмотреть</button>
                    </div>
                </div>
            </div>
        </div>
    )
}