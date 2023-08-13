import React from 'react'
import './Header.css'
export const Search = () => {
    return (
        <div className="Search">
            <form className="SearchDiv">
                <input type="text" name="name" placeholder="Поиск"/>
                <button type="submit" value="Submit" />
            </form>
        </div>
    )
}
