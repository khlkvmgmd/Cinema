import React from 'react'
import './LeftSideBar.css'
import { LeftSideBarButton } from './LeftSideBarButton'
import { LeftSideBarContainer } from './LeftSideBarContainer'
import LeftSideBarData from './LeftSideBarData.json'
import { Logo } from './Logo'
import { Profile } from './Profile'
export const LeftSideBar = () => {
    return (
        <div className="LeftSideBar">
            <Logo/>
            <Profile/>
            <LeftSideBarContainer>
                {LeftSideBarData.map((data, index) => {
                    return <LeftSideBarButton data={data} key={index} />
                })}
            </LeftSideBarContainer>
        </div>
    )
}