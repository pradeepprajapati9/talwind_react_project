import React from 'react'
import "./Homepage.css";
import SideNav from "../Navigation/SideNav"
import TimeLine from "../Timeline/TimeLine"

const Homepage = () => {
    return (
        <div className='homepage'>
            <div className="homepage_nav">
                <SideNav />
            </div>
            {/* <div className="homepage_timeline">
                <TimeLine />
            </div> */}
        </div>
    )
}

export default Homepage