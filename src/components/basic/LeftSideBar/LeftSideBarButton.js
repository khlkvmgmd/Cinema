import React from 'react'

export const LeftSideBarButton = ({data}) => {
    const {id, title, link} = data
    return (
        <div className = "LeftSideBarButton">
            <button>
                {title}
            </button>
        </div>
    )
}
