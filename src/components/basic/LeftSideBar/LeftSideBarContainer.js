import React from 'react'

export const LeftSideBarContainer = ({children, ...restProps}) => {

    return (
        <div className = "LeftSideBarContainer" {...restProps}>
            {children}
        </div>
    )
}
